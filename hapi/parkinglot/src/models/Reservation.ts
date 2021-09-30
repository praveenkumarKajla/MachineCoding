/* eslint import/no-cycle: off */

import {
  table,
  attribute,
  autoGeneratedHashKey,
} from "@aws/dynamodb-data-mapper-annotations";
import {
  PerIndexOptions,
  SecondaryIndexOptions,
} from "@aws/dynamodb-data-mapper";

import { DB_CONFIG } from "../config/db_config";

import GlobalSecondaryIndex from "./IndexGlobal";
import { number } from "joi";

const { TABLE_NAME_PREFIX } = DB_CONFIG.DATABASE_CONNECTION;

export enum VehicleType {
  COMPACT = "compact",
  NORMAL = "normal",
  LARGE = "large",
}

export type GarageRates = {
  [vehicle_type in VehicleType]: number;
};
@table(`${TABLE_NAME_PREFIX}reservation`)
export default class Reservation extends GlobalSecondaryIndex {
  @autoGeneratedHashKey()
  ID: string;

  @attribute()
  garage_id: string;

  @attribute()
  spot_id: string;

  @attribute({ defaultProvider: () => Date.now() })
  start_time: number;

  @attribute()
  end_time: number;

  @attribute()
  fee: number;

  @attribute({ defaultProvider: () => false })
  paid: boolean;
}