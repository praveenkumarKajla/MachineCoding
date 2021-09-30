


import {
    table,
    hashKey,
    autoGeneratedHashKey,
    attribute,
} from "@aws/dynamodb-data-mapper-annotations";

import { DB_CONFIG } from "@config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;



export enum TeamType { 
    "IT",
    "Operations",
    "Sales",
    "Marketing",
    "Human Resources",
    "Engineering",
    "Product",
    "Design",
    "Support",
    "Other"
}

@table(`${TABLE_NAME_PREFIX}workspace`)
export class Workspace extends GlobalSecondaryIndex {



    @autoGeneratedHashKey()
    id: string;

    @attribute()
    name: string; // names are unique

    @attribute()
    displayName: string;

    @attribute()
    teamType : TeamType





}