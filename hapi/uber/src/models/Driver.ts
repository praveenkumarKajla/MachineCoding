
/* eslint import/no-cycle: off */

import {
    table,
    hashKey,
    attribute,
} from "@aws/dynamodb-data-mapper-annotations";

import { DB_CONFIG } from "@config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
import { generateRandomKeyWithLength } from "../utils/index";
import { Location } from "@typeroot/models";



export enum DriverStatus {
    OFFLINE = 10,
    ONLINE = 20,
    BOOKED = 30,
    IN_PROGRESS = 40
}


const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

@table(`${TABLE_NAME_PREFIX}driver`)
export default class Driver extends GlobalSecondaryIndex {
    @hashKey({ defaultProvider: () => generateRandomKeyWithLength(8).toUpperCase() })
    id: string;

    @attribute()
    first_name: string;

    @attribute()
    last_name: string;

    @attribute({ defaultProvider: () => generateRandomKeyWithLength(10).toUpperCase() })
    license: string;

    @attribute()
    email: string;

    @attribute()
    picture: string;

    @attribute()
    location: Location;

    @attribute({ defaultProvider: () => DriverStatus.OFFLINE })
    status: DriverStatus;


}
