
/* eslint import/no-cycle: off */

import {
  table,
  hashKey,
  attribute,
  autoGeneratedHashKey,
} from "@aws/dynamodb-data-mapper-annotations";
import { PerIndexOptions, SecondaryIndexOptions } from "@aws/dynamodb-data-mapper";

import { DB_CONFIG } from "../config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";

import { SPLIT_TYPE, UserStatus } from "@typeroot/models"
import { mapper } from "@services/db/connection";
import { generateRandomKeyWithLength } from "@api/components/splitwise/utils";

const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

@table(`${TABLE_NAME_PREFIX}user`)
export default class User extends GlobalSecondaryIndex {
  @hashKey({ defaultProvider: () => generateRandomKeyWithLength(8).toUpperCase() })
  ID: string;

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

  @attribute()
  picture: string;

  @attribute()
  invitedBy: string;

  @attribute({ defaultProvider: () => UserStatus.INVITED })
  status: UserStatus;

  @attribute()
  password_hash: string;

  static get table_name(): string {
    return `${TABLE_NAME_PREFIX}user`
  }

  public static global_secondary_indices = {
    email: {
      writeCapacityUnits: 2,
      readCapacityUnits: 2,
      type: "global",
      projection: "all",
    } as SecondaryIndexOptions,

  } as PerIndexOptions;

}
