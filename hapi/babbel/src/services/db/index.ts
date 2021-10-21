import { Pool, PoolConfig } from "pg";
import { parse as parsePgConnectionString } from "pg-connection-string";

import { DB_CONFIG } from "@config/db_config";

const pgUrl = DB_CONFIG.PG_CONNECTION_STRING;
const options = parsePgConnectionString(pgUrl);

const config = {
  ...{ ...options, port: +options.port },
  max: 15,
  idleTimeoutMillis: 500,
} as PoolConfig;

const pgPool = new Pool(config);

export function nestQuerySingle(query) {
  return `
    (SELECT row_to_json(x) FROM (${query}) x)
  `;
}

export default pgPool;
