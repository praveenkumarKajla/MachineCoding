import Restaurant from "@models/Restaurant";
import { AddressService } from "@services/address";
import { RestaurantService } from "@services/restaurant";
import { Location } from "@typeroot/models";

export class RestaurantDao {


    static async getNearby(location: Location){


    }

    static async getAll(){
        const restaurants: Array<Restaurant> = await RestaurantService.getAll()
        const addressIds = restaurants.map(restaurant => restaurant.address_id)
        const addressesMapping = await AddressService.getAddresses(addressIds, true)
        return {
            totalRestaurants: restaurants.length,
            data: restaurants.map(restaurant => ({
                ...restaurant,
                address: addressesMapping[restaurant.address_id]
            }))
        }
    }
}