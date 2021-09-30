import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { OrderData } from "@typeroot/payload";
import { OrderDao } from "./dao";


export class OrderController {



    static async newOrder(request: Request, h: ResponseToolkit) {

        const orderData = request.payload as OrderData;
        try{ 
            const order  = await OrderDao.placeNew(orderData)
            return order
        }
        catch(err){
            return h.response({ message: err.message }).code(400)
        }

    }
}