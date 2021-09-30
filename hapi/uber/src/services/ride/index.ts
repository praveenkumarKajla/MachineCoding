import { Ride, RideStatus } from "@models/Ride"
import { mapper } from "@services/db/connection"
import { RideInfo } from "@typeroot/models"
import { AttributePath, UpdateExpression } from "@aws/dynamodb-expressions";

export class RideService {


    static async get(ride_id: string): Promise<Ride | null> {
        const toGet = Object.assign(new Ride(), { id: ride_id })
        const ride = await mapper.get(toGet).catch(err => { console.log(err.message); return null })
        return ride
    }

    static async add(tripInfo: RideInfo) {
        const trip = await mapper.put(
            Object.assign(
                new Ride(), { ...tripInfo }
            )).catch((err) => { console.log(err.message); return null })

        return trip
    }

    static async getByRider(rider_id: string, limit: number = 10, offset: string = "") {
        let start_key: Ride;
        if (limit && limit > 10) limit = 10;
        if (offset) {
            const keys = offset.split(":");
            if (keys.length !== 2) throw new Error("Invalid request");
            start_key = Object.assign(new Ride(), {
                id: keys[0],
                rider_id,
                created_at: keys[1],
            });
        }
        const attr: any = {
            indexName: "rider",
            limit,
            scanIndexForward: false,
            startKey: start_key,
        };

        const data = [];
        let result = [];

        const paginator = mapper
            .query(Ride, { rider_id }, attr)
            .pages();

        for await (const expense of paginator) {
            result = [...result, ...expense];
        }
        return {
            result,
            next_offset: paginator.lastEvaluatedKey
                ? `${paginator.lastEvaluatedKey.id}:${paginator.lastEvaluatedKey.created_at}`
                : null,
        }
    }

    static async setStatus(ride_id: string, status: RideStatus): Promise<Ride | null> {
        const path = new AttributePath("status");
        const expr = new UpdateExpression();
        expr.set(path, status);
        try {
            const res = await mapper.executeUpdateExpression(
                expr,
                Object.assign(new Ride(), { id: ride_id }),
                Ride,
            );
            return res;
        } catch (e) {
            return null;
        }
    }

    static async batchGet(
        cabIds: Array<string>,
        isKeyValuePair = false,
        projection?: any)
        : Promise<Record<string, Ride> | Array<Ride>> {
        const toGet = cabIds.map(cab_id => Object.assign(new Ride(), { cab_id }))
        const batchGet = await mapper.batchGet(toGet, {
            perTableOptions: {
                [Ride.table_name]: {
                    projection
                }
            }
        })
        const trips: Record<string, any> | Array<any> = isKeyValuePair ? {} : []
        for await (const trip of batchGet) {
            if (isKeyValuePair) trips[trip.cab_id] = trip
            else trips.push(trip)
        }
        return trips
    }
}