import { Constants } from "@config/constants";
import Driver from "@models/Driver";
import Rider from "@models/Rider";
import { Location } from "@typeroot/models";
import { getDistance } from "geolib";

export class Strategy {


    static matchCabToRider(
        rider: Rider,
        drivers: Array<Driver>,
        source: Location,
        destination: Location): Driver {

        if (drivers.length === 0) return null;
        return drivers[0]

    }

    static calculatePrice(source: Location, destination: Location): number {
        return Constants.BASE_PRICE + (getDistance(source, destination) * Constants.PRICE_PER_KM / 1000)
    }
}