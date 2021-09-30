import Reservation from "@models/Reservation";

import { mapper } from "@services/db/connection";
import { ReservationInfo } from "@typeroot/models";

export class ReservationService {
  static async reserve(info: ReservationInfo) {
    const toPut = Object.assign(new Reservation(), {
      ...info,
    });
    const reservation = await mapper.put(toPut);
    return reservation;
  }
}
