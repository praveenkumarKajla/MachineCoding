import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import { GarageController } from "./controller";

export class GarageRoutes {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;
  private jwtAuthorization = "jwtAuthorization";

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = GarageController;
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.GARAGE}allocate/`,
      handler: GarageController.allocate,
      options: {
        auth: {
          mode: "required",
          strategy: this.jwtAuthorization,
        },
      },
    });
    /* #endregion */
  }
}
