/* eslint-disable import/no-unresolved */
import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { Allocation } from "@typeroot/payload";

import { GarageDao } from "./dao";

export class GarageController {
  static async allocate(request: Request, h: ResponseToolkit) {
    const payload = request.payload as Allocation;

    try {
      const spot = await GarageDao.allocateSpot(payload);
      return spot;
    } catch (err) {
      return h.response({ message: err.message }).code(400);
    }
  }
}
