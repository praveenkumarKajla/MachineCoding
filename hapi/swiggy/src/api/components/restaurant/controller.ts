import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { Location } from "@typeroot/models";
import { RestaurantDao } from "./dao";
import validate from "./validate";


export class RestaurantController {


    static async getRestaurants(request: Request, h: ResponseToolkit) {

        const { lat, lng } = request.query

        let location: Location
        if(lat && lng) {
            const { 
                value : { lat: latitude, lng: longitude },
                 error: error2 
                } = validate.get.restaurants.query.validate({lat,lng});
            if (error2) {
                return h.response({ message: error2.message}).code(400);
              }
            location = {
                latitude,
                longitude
            }
        }

        try{ 
            const data = location ? await RestaurantDao.getNearby(location) : RestaurantDao.getAll();
            return data
        }
        catch(error){
            return h.response({ message: error.message}).code(400)
        }

    }





}