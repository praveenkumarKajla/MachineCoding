/* eslint import/no-cycle: off */

import {
  table,
  attribute,
  hashKey,
} from "@aws/dynamodb-data-mapper-annotations";
import {
  PerIndexOptions,
  SecondaryIndexOptions,
} from "@aws/dynamodb-data-mapper";

import { DB_CONFIG } from "../config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
import { generateRandomKeyWithLength } from "@utils/index";

const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

export enum VehicleType {
  COMPACT = "compact",
  NORMAL = "normal",
  LARGE = "large",
}

@table(`${TABLE_NAME_PREFIX}user`)
export default class User extends GlobalSecondaryIndex {
  @hashKey({
    defaultProvider: () => generateRandomKeyWithLength(8).toUpperCase(),
  })
  user_id: string;

  @attribute()
  first_name: string;

  @attribute()
  last_name: string;

  @attribute({
    indexKeyConfigurations: {
      email: "HASH",
    },
  })
  email: string;

  public static global_secondary_indices = {
    email: {
      writeCapacityUnits: 2,
      readCapacityUnits: 2,
      type: "global",
      projection: "all",
    } as SecondaryIndexOptions,
  } as PerIndexOptions;
}
