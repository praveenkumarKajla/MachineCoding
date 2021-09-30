import { VehicleType } from "@models/Garage";
import { SpotStatus } from "@models/Spot";
import { SpotService } from "@services/spot";

const type = [VehicleType.COMPACT, VehicleType.NORMAL, VehicleType.LARGE];
const status = [SpotStatus.EMPTY, SpotStatus.BOOKED];

async function addSpots() {
  const spots = new Array(30).fill({}).map((x) => ({
    garage_id: "ABCd",
    vehicle_type: type[Math.floor(Math.random() * 3)],
    status: status[Math.floor(Math.random() * 2)],
  }));

  const sp = await SpotService.addSpots(spots);
  console.log(sp);
}
addSpots();
