import Menu from "@models/Menu";
import { mapper } from "@services/db/connection";



export interface MenuItem {
    name: string;
    restaurant_id: string;
    category: string;
    description: string;
    picture: string;
    price: number;
}

export class MenuService {

    static async batchGet(items: Array<Menu>, isKeyValuePair = false)
        : Promise<Record<string, Menu> | Array<Menu>> {
        let result : Record<string, any> | Array<any> = isKeyValuePair ? {} : []
        for await (const address of mapper.batchGet(items)) {
            if(isKeyValuePair)result[address.id] = address
            else result.push(address)
        }
        return result
    }

    static async batchPut(items: Array<Menu>) {
        let result = []
        for await (const persisted of mapper.batchPut(items)) {
            // items will be yielded as they are successfully written
            result.push(persisted)
        }
        return result

    }


    static async getMenuItems(addressIds: Array<string>, isKeyValuePair = false)
        : Promise<Record<string, Menu> | Array<Menu>> {
        const toGet = addressIds.map(
            addressId => Object.assign(new Menu(), { id: addressId }
            ))
        const items = await this.batchGet(toGet, isKeyValuePair)
        return items
    }

    static async addMenuItems(menuItems: Array<MenuItem>) {
        const toPut = menuItems.map(
            item => Object.assign(new Menu(), { ...item }
            ))
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