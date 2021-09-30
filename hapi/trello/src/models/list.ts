


import {
    table,
    hashKey,
    autoGeneratedHashKey,
    attribute,
} from "@aws/dynamodb-data-mapper-annotations";

import { DB_CONFIG } from "@config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

@table(`${TABLE_NAME_PREFIX}list`)
export class List extends GlobalSecondaryIndex {

    @autoGeneratedHashKey()
    id :string;

    @attribute()
    name :string;

    @attribute()
    board_id :string; // belong to which board

    
    @attribute({defaultProvider : () => false})
    closed: boolean;


    // we can maintain lists and card in the same table as
    // PK = table#12345 SK = table#12345 or SK = card#12345
    /// for simplicity purposes keeping different tables




}