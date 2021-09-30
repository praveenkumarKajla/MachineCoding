
/* eslint import/no-cycle: off */

import {
    table,
    hashKey,
    attribute,
} from "@aws/dynamodb-data-mapper-annotations";

import { DB_CONFIG } from "@config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
import { generateRandomKeyWithLength } from "../utils/index";
import { PerIndexOptions, SecondaryIndexOptions } from "@aws/dynamodb-data-mapper";


const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

@table(`${TABLE_NAME_PREFIX}user`)
export default class User extends GlobalSecondaryIndex {
    @hashKey({ defaultProvider: () => generateRandomKeyWithLength(8).toUpperCase() })
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

    @attribute()
    picture: string;

    @attribute()
    invitedBy: string;

    @attribute({ defaultProvider: () => Date.now() })
    created_at: number;

    public static global_secondary_indices = {
        email: {
          writeCapacityUnits: 2,
          readCapacityUnits: 2,
          type: "global",
          projection: "all",
        } as SecondaryIndexOptions,
    
      } as PerIndexOptions;

}
