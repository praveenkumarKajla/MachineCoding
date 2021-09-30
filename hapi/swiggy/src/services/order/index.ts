import Order, { ItemDetails } from "@models/Order";
import { mapper } from "@services/db/connection";



export interface OrderInfo {
    user_id: string;
    restaurant_id: string;
    items: Array<ItemDetails>;
    total: number;
}


export class OrderService {



    static async add(orderInfo: OrderInfo) {
        const order = await mapper.put(
            Object.assign(
                new Order(), { ...orderInfo }
            )).catch((err) => { console.log(err.message); return null })

        return order
    }

}