
/* eslint import/no-cycle: off */

import {
    table,
    hashKey,
    autoGeneratedHashKey,
    attribute,
} from "@aws/dynamodb-data-mapper-annotations";

import { DB_CONFIG } from "@config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
import { Location } from "@typeroot/models";

export interface Area {
    name: string;
    pincode: string; // 560078
    slug: string;
}



const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

@table(`${TABLE_NAME_PREFIX}address`)
export default class Address extends GlobalSecondaryIndex {
    @autoGeneratedHashKey()
    id: string;

    @attribute()
    name: string; // home, office, other

    @attribute()
    address1: string;

    @attribute()
    address2: string;

    @attribute()
    landmark: string;

    @attribute()
    area: Area;

    @attribute()
    city: string;

    @attribute()
    location: Location;

}
