import { RideService } from "@services/ride";

export class RiderDao {


    static async getRides(riderId: string) {
        const allRides = await RideService.getByRider(riderId)
        return allRides
    }


}
