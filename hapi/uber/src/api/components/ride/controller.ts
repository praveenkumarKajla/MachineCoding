/* eslint-disable import/no-unresolved */
import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { RidePayload } from "@typeroot/payload";

import { RideDao } from "./dao";
import validate from "./validate";

export class RideController {


  static async book(request: Request, h: ResponseToolkit) {

    const payload = request.payload as RidePayload;
    const { id: riderId } = request.auth.credentials.user;

    try {
      const ride = await RideDao.findAndBook({ ...payload, riderId })
      return ride
    }
    catch (err) {
      return h.response({ message: err.message }).code(400);
    }
  }

  static async end(request: Request, h: ResponseToolkit) {

    const { rideId } = request.params

    try {
      const ride = await RideDao.endRide(rideId)
      return ride
    }
    catch (err) {
      return h.response({ message: err.message }).code(400);
    }

  }

}
