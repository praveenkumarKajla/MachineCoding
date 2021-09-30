import { ScanIterator } from "@aws/dynamodb-data-mapper";
import { AttributePath, UpdateExpression } from "@aws/dynamodb-expressions";
import { Constants } from "@config/constants";
import Driver, { DriverStatus } from "@models/Driver";
import { mapper } from "@services/db/connection";
import { Location } from "@typeroot/models";
import { getDistance } from "geolib";

export class DriverService {

    static async getClosestDrivers(
        source: Location,
        max_distance: number = Constants.MAX_ALLOWED_DISTANCE)
        : Promise<Array<Driver>> {

        const result = []
        const query: ScanIterator<Driver> = mapper.scan(Driver)
        for await (let driver of query) {
            if (driver.status === DriverStatus.ONLINE) {
                const distance = getDistance(driver.location, source)
                console.log(driver.id, driver.location.latitude, driver.location.longitude, distance)
                if (distance <= max_distance) result.push(driver)
            }
        }
        return result;
    }


    static async get(driver_id: string) {
        const toGet = Object.assign(new Driver(), { id: driver_id })
        const driver = await mapper.get(toGet).catch(err => { console.log(err.message); return null })
        return driver
    }


    static async setStatus(driver_id: string, status: DriverStatus): Promise<Driver | null> {
        const path = new AttributePath("status");
        const expr = new UpdateExpression();
        expr.set(path, status);
        try {
            const res = await mapper.executeUpdateExpression(
                expr,
                Object.assign(new Driver(), { id: driver_id }),
                Driver,
            );
            console.log("setted", res);
            return res;
        } catch (e) {
            return null;
        }
    }
}