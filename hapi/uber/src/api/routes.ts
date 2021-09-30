/* eslint-disable import/no-unresolved */
/* eslint no-new: off */

import { Server } from "@hapi/hapi";
import { SERVER_CONFIG } from "@config/server_config";

import { CabRoutes } from "@api/components/driver/routes";
import { RideRoutes } from "./components/ride/routes";
import { RiderRoutes } from "./components/rider/routes";

const { BASE_URL, API_VERSION } = SERVER_CONFIG;
const ROUTE_PREFIX_V1 = BASE_URL + API_VERSION;

export function initAllRoutes(server: Server): void {
  new CabRoutes(server, ROUTE_PREFIX_V1);
  new RideRoutes(server, ROUTE_PREFIX_V1);
  new RiderRoutes(server, ROUTE_PREFIX_V1);

  console.log(server.table().map(x => x.path));
}
