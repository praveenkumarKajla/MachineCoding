/* eslint-disable import/no-unresolved */
import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";

import { RiderDao } from "./dao";
import validate from "./validate";

export class RiderController {


  static async getRides(request: Request, h: ResponseToolkit) {

    const { id: riderId } = request.auth.credentials.user;
    try {
      const rides = await RiderDao.getRides(riderId)
      return rides
    }
    catch (err) {
      return h.response({ message: err.message }).code(400);
    }


  }

}
