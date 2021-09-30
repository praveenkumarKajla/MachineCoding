import { ScanIterator } from "@aws/dynamodb-data-mapper";
import Menu from "@models/Menu";
import Restaurant from "@models/Restaurant";
import { mapper } from "@services/db/connection";




export interface RestaurantInfo{
    address_id: string;
    name: string;
    contact: string;
    ratings: string;
    totalRatings: number;
    cuisines: Array<string>;
    costForTwo: number;
    discount: number;
    picture: string;
}

export class RestaurantService {


    static async get(restaurant_id:string){
        const restaurant = await mapper.get(
            Object.assign(new Restaurant(), {id: restaurant_id})
            ).catch(err => { console.log(err.message); return null });
        return restaurant
    }

    static async getAll(){

        const scan : ScanIterator<Restaurant> = await mapper.scan(Restaurant)
        const restaurants = []
        for await (let item of scan) {
            restaurants.push(item)
        }
        return restaurants

    }

    static async batchPut(items: Array<Restaurant>) {
        let result = []
        for await (const persisted of mapper.batchPut(items)) {
            // items will be yielded as they are successfully written
            result.push(persisted)
        }
        return result

    }

    static async addRestaurants(restaurants: Array<RestaurantInfo>) {
        const toPut = restaurants.map(
            restaurant => Object.assign(new Restaurant(), { ...restaurant }
            ))
        console.log(toPut)
        const items = await this.batchPut(toPut)
        return items
    }

    static async getMenuByRestaurantId(restaurantId: string){
        const query = await mapper.query(Menu,
            { restaurant_id: restaurantId }, 
            {indexName: "restaurant",}
            )
        const menuItems = []
        for await (let item of query) {
            menuItems.push(item)
        }
        return menuItems
    }


}