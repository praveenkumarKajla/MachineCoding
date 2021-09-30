import { ERROR } from "@errors/index";
import { SPOT_ERRORS } from "@errors/spot";
import { SpotStatus } from "@models/Spot";
import { GarageService } from "@services/garage";
import { ReservationService } from "@services/reservation";
import { SpotService } from "@services/spot";
import { Allocation } from "@typeroot/payload";

export class GarageDao {
  static async allocateSpot(info: Allocation) {
    const { garage_id, vehicle_type } = info;

    const garage = await GarageService.get(garage_id);
    if (!garage || !garage.is_active) {
      throw new ERROR(SPOT_ERRORS.NO_GARAGE_FOUND);
    }

    const { spot, err } = await SpotService.freeSpots(garage_id, vehicle_type);
    if (err) {
      throw new ERROR(SPOT_ERRORS.NO_SPOT_FOUND);
    }

    const spot_id = spot.ID;

    const [updatedSpot, reservation] = await Promise.all([
      SpotService.updateStatus(spot_id, SpotStatus.BOOKED),
      ReservationService.reserve({ garage_id, spot_id }),
    ]);
    return { ...updatedSpot, reservation };
  }
}
