import { ERROR } from "@errors/index";
import { MENU_ERRROS } from "@errors/menu";
import Restaurant from "@models/Restaurant";
import { MenuService } from "@services/menu";
import { OrderService } from "@services/order";
import { RestaurantService } from "@services/restaurant";
import { OrderData } from "@typeroot/payload";



export class OrderDao {


    static async placeNew(orderData: OrderData){

        const items = await MenuService.getMenuItems(orderData.items.map(item => item.id),true);
        if(Object.values(items).length !== orderData.items.length){
            throw new ERROR(MENU_ERRROS.SOME_ITEMS_NOT_AVAILABLE)
        }

        const total = orderData.items.reduce((acc,next) => acc+(items[next.id].price * next.quantity),0)
        const restaurant: Restaurant = await RestaurantService.get(orderData.restaurant_id)
        const order = await OrderService.add({
            user_id: orderData.user_id,
            restaurant_id: orderData.restaurant_id,
            items: orderData.items.map(item => 
                ({id: item.id, quantity: item.quantity, price: items[item.id].price})
                ),
            total
            
        })
        return {...order,restaurant}

    }
}