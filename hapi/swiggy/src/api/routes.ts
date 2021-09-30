/* eslint-disable import/no-unresolved */
/* eslint no-new: off */

import { Server } from "@hapi/hapi";
import { SERVER_CONFIG } from "@config/server_config";
import { RestaurantRoutes } from "./components/restaurant/routes";
import { OrderRoutes } from "./components/order/routes";



const { BASE_URL, API_VERSION } = SERVER_CONFIG;
const ROUTE_PREFIX_V1 = BASE_URL + API_VERSION;

export function initAllRoutes(server: Server): void {

  new RestaurantRoutes(server, ROUTE_PREFIX_V1);
  new OrderRoutes(server, ROUTE_PREFIX_V1);
  console.log(server.table().map(x => x.path));
}
