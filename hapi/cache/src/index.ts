import { Mutex } from "async-mutex";

const mutex = new Mutex();
const DefaultExpiration: number = 0;
const NoExpiration: number = -1;

interface IItem {
  Object: any;
  Expiration: number;
}

interface IJanitor {
  Interval: number;
  stop: boolean;
}

type OnEvicted = (a: string, obj: Item["Object"] | null) => null;

interface ICache {
  defaultExpiration: number;
  items: Record<string, Item>;
  mu: Mutex;
  onEvicted: OnEvicted;
  janitor: Janitor;
}

type keyAndValue = {
  key: string;
  value: any;
};

class Item {
  Expiration: number;
  Object: any;
  constructor(Object: any, Expiration: number) {
    this.Object = Object;
    this.Expiration = Expiration;
  }
  Expired(): boolean {
    if (this.Expiration == 0) {
      return false;
    }
    return Date.now() > this.Expiration;
  }
}

export class Cache {
  defaultExpiration: number;
  items: Record<string, Item>;
  onEvicted: OnEvicted;
  janitor: any;
  constructor(defaultExpiration: number, items: Record<string, Item>) {
    this.defaultExpiration = defaultExpiration;
    this.items = items;
  }

  async Set(k: string, x: any, d: number) {
    let e: number;

    // if d == 0 set to cache's default expiration
    if (d === DefaultExpiration) {
      d = this.defaultExpiration;
    }
    if (d > 0) {
      // TODO : proper date, now in ms epoch
      e = Date.now() + d;
    }
    //  acquire lock
    const release = await mutex.acquire();
    this.items[k] = new Item(x, e);
    release();
  }

  set(k: string, x: any, d: number) {
    let e: number;

    // if d == 0 set to cache's default expiration
    if (d === DefaultExpiration) {
      d = this.defaultExpiration;
    }
    if (d > 0) {
      // TODO : proper date, now in ms epoch
      e = Date.now() + d;
    }
    //  no lock cuz callee is using the lock
    this.items[k] = new Item(x, e);
  }

  SetDefault(k: string, x: any) {
    this.Set(k, x, DefaultExpiration);
  }

  async Get(k: string): Promise<[Item["Object"], boolean]> {
    const release = await mutex.acquire();
    const item = this.items[k];
    if (!item) {
      release();
      return [null, false];
    }
    if (item.Expiration > 0) {
      if (Date.now() > item.Expiration) {
        release();
        return [null, false];
      }
    }
    release();
    return [item.Object, true];
  }

  async GetWithExpiration(
    k: string
  ): Promise<[Item["Object"], Item["Expiration"], boolean]> {
    const release = await mutex.acquire();
    const item = this.items[k];
    if (!item) {
      release();
      return [null, 0, false];
    }
    if (item.Expiration > 0) {
      if (Date.now() > item.Expiration) {
        release();
        return [null, 0, false];
      }

      return [item.Object, item.Expiration, true];
    }
    release();
    return [item.Object, 0, true];
  }

  get(k: string): [Item["Object"], boolean] {
    const item = this.items[k];
    if (!item) {
      return [null, false];
    }
    if (item.Expiration > 0) {
      if (Date.now() > item.Expiration) {
        return [null, false];
      }
    }
    return [item.Object, true];
  }

  async Add(k: string, x: any, d: number): Promise<Error | null> {
    const release = await mutex.acquire();
    const [_, found] = this.get(k);
    if (found) {
      release();
      throw new Error(`Item ${k} already exists`);
    }
    this.set(k, x, d);
    release();
    return null;
  }

  async Replace(k: string, x: any, d: number) {
    const release = await mutex.acquire();
    const [_, found] = this.get(k);
    if (!found) {
      release();
      throw new Error(`Item ${k} doesn't exist`);
    }
    this.set(k, x, d);
    release();
    return null;
  }

  async Delete(k: string) {
    const release = await mutex.acquire();
    const [obj, evicted] = this.delete(k);
    release();
    if (evicted) {
      this.onEvicted(k, obj);
    }
  }

  delete(k: string): [Item["Object"] | null, boolean] {
    if (this.onEvicted) {
      const item = this.items[k];
      if (item) {
        delete this.items[k];
        return [item.Object, true];
      }
    }
    delete this.items[k];
    return [null, false];
  }

  async DeleteExpired() {
    let evictedItems: Array<keyAndValue> = [];
    const now = Date.now();
    const release = await mutex.acquire();
    for (let k in this.items) {
      const v = this.items[k];
      if (v.Expiration > 0 && now > v.Expiration) {
        const [ov, evicted] = this.delete(k);
        if (evicted) {
          evictedItems.push({ key: k, value: v } as keyAndValue);
        }
      }
    }
    release();
    for (let i = 0; i < evictedItems.length; i += 1) {
      const v = evictedItems[i];
      this.onEvicted(v.key, v.value);
    }
  }

  async OnEvicted(fn: OnEvicted) {
    const release = await mutex.acquire();
    this.onEvicted = fn;
    release();
  }

  async Items(): Promise<Record<string, Item>> {
    const release = await mutex.acquire();
    const validItems: Record<string, Item> = {};
    const now = Date.now();
    for (let k in this.items) {
      const v = this.items[k];
      if (v.Expiration > 0 && now > v.Expiration) {
        continue;
      }
      validItems[k] = v;
    }
    release();
    return validItems;
  }

  async ItemCount(): Promise<number> {
    const release = await mutex.acquire();
    const length = Object.keys(this.items).length;
    release();
    return length;
  }

  async Flush() {
    const release = await mutex.acquire();
    this.items = {};
    release();
  }
  stopJanitor() {
    this.janitor.stop = true;
  }
  runJanitor(interval: number) {
    this.janitor = new Janitor(interval, false);
    this.janitor.Run(this);
  }
}

class Janitor {
  Interval: number;
  stop: boolean;
  constructor(Interval: number, stop: boolean) {
    this.Interval = Interval;
    this.stop = stop;
  }

  Run(cache: Cache) {
    const ticker = setInterval(() => {
      if (this.stop) {
        clearInterval(ticker);
        return;
      }
      cache.DeleteExpired();
    }, this.Interval);
  }
}

function newCache(de: number, m: Record<string, Item>) {
  if (de === 0) {
    de = NoExpiration;
  }
  const c = new Cache(de, m);
  return c;
}

function newCacheWithJanitor(de: number, ci: number, m: Record<string, Item>) {
  const c = newCache(de, m);
  if (ci > 0) {
    c.runJanitor(ci);
  }
  return c;
}
function New(defaultExpiration: number, cleanUpInterval: number): Cache {
  const items = {};
  return newCacheWithJanitor(defaultExpiration, cleanUpInterval, items);
}

function NewFrom(
  defaultExpiration: number,
  cleanUpInterval: number,
  items: Record<string, Item>
): Cache {
  return newCacheWithJanitor(defaultExpiration, cleanUpInterval, items);
}

export { New, NewFrom };
