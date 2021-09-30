import Garage from "@models/Garage";
import { mapper } from "@services/db/connection";
import { GarageInfo } from "@typeroot/models";

export class GarageService {
  static async get(garageId: string): Promise<Garage | null> {
    const garage = await mapper
      .get(Object.assign(new Garage(), { ID: garageId }))
      .catch((err) => {
        console.log(err);
        return null;
      });
    return garage;
  }

  static async batchPut(items: Array<Garage>) {
    let result = [];
    for await (const persisted of mapper.batchPut(items)) {
      // items will be yielded as they are successfully written
      result.push(persisted);
    }
    return result;
  }

  static async addGarages(garages: Array<GarageInfo>) {
    const toPut = garages.map((garage) =>
      Object.assign(new Garage(), { ...garage })
    );
    console.log(toPut);
    const items = await this.batchPut(toPut);
    return items;
  }
}
