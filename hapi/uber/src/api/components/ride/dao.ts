
import { ERROR } from "@errors/index";
import { CAB_ERRORS } from "@errors/cab";
import { RIDER_ERRORS } from "@errors/rider";
import { RIDE_ERRORS } from "@errors/ride";

import { RiderService } from "@services/rider";
import { RideService } from "@services/ride";
import { DriverService } from "@services/driver";

import { Strategy } from "@services/strategy";

import { RidePayload } from "@typeroot/payload";
import { DriverStatus } from "@models/Driver";
import { RideStatus } from "@models/Ride";
import { getDistance } from "geolib";


export class RideDao {



    static async findAndBook(tripPayload: RidePayload) {
        const rider = await RiderService.get(tripPayload.riderId)
        if (!rider) throw new ERROR(RIDER_ERRORS.UNABLE_TO_FETCH)

        const closestDrivers = await DriverService.getClosestDrivers(tripPayload.source)
        console.log(closestDrivers)
        const bestCab = Strategy.matchCabToRider(rider, closestDrivers, tripPayload.source, tripPayload.destination)
        if (!bestCab) throw new ERROR(CAB_ERRORS.NO_CABS_FOUND)

        const fee = Strategy.calculatePrice(tripPayload.source, tripPayload.destination)


        const ride = await RideService.add({
            driver_id: bestCab.id,
            rider_id: rider.id,
            source: tripPayload.source,
            destination: tripPayload.destination,
            fee
        })

        if (ride && ride.driver_id) DriverService.setStatus(ride.driver_id, DriverStatus.BOOKED)
        return ride
    }

    static async endRide(tripId: string) {
        const ride = await RideService.get(tripId)
        if (!ride) throw new ERROR(RIDE_ERRORS.UNKNOWN_RIDE)
        const [updatedRide, driver] = await Promise.all([
            RideService.setStatus(ride.id, RideStatus.FINISHED),
            DriverService.setStatus(ride.driver_id, DriverStatus.ONLINE
            )])
        return updatedRide
    }
}
