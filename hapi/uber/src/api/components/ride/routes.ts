import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import { RideController } from "./controller";

export class RideRoutes {
  private server: Server;
  private jwtAuthorization = "jwtAuthorization";
  private controller;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = RideController
    this.initRoutes();
  }

  private initRoutes(): void {

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.RIDE}book`,
      handler: RideController.book,
      options: {
        auth: {
          mode: "required",
          strategy: this.jwtAuthorization,
        },
      }
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.RIDE}{rideId}/end`,
      handler: RideController.end,
      options: {
        auth: {
          mode: "required",
          strategy: this.jwtAuthorization,
        },
      }
    });


    /* #endregion */
  }
}
