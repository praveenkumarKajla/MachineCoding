import { QueryOptions } from "@aws/dynamodb-data-mapper";
import {
  AttributePath,
  equals,
  UpdateExpression,
} from "@aws/dynamodb-expressions";
import { VehicleType } from "@models/Garage";
import Spot, { SpotStatus } from "@models/Spot";
import { mapper } from "@services/db/connection";
import { SpotInfo } from "@typeroot/models";

export class SpotService {
  static async freeSpots(garage_id: string, vehicle_type: VehicleType) {
    const attr: QueryOptions = {
      indexName: "garage",
    };
    if (vehicle_type) {
      attr.filter = {
        ...equals(vehicle_type),
        subject: "vehicle_type",
      };
    }
    try {
      const query = await mapper.query(
        Spot,
        {
          garage_id,
          status: SpotStatus.EMPTY,
        },
        attr
      );
      const spots = [];
      for await (let item of query) {
        spots.push(item);
      }
      if (spots.length === 0) return { err: "no spots found" };
      return { spot: spots[0] };
    } catch (err) {
      console.log(err.message);
      return { err: err.message };
    }
  }

  static async batchPut(items: Array<Spot>) {
    let result = [];
    for await (const persisted of mapper.batchPut(items)) {
      // items will be yielded as they are successfully written
      result.push(persisted);
    }
    return result;
  }

  static async addSpots(spots: Array<SpotInfo>) {
    const toPut = spots.map((spot) => Object.assign(new Spot(), { ...spot }));
    console.log(toPut);
    const items = await this.batchPut(toPut);
    return items;
  }

  static async updateStatus(
    spot_id: string,
    status: SpotStatus
  ): Promise<Spot | null> {
    const path = new AttributePath("status");
    const expr = new UpdateExpression();
    expr.set(path, status);
    try {
      const res = await mapper.executeUpdateExpression(
        expr,
        Object.assign(new Spot(), { id: spot_id }),
        Spot
      );
      return res;
    } catch (e) {
      return null;
    }
  }
}
