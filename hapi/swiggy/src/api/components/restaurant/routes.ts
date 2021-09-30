import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import {  RestaurantController } from "./controller";

export class RestaurantRoutes {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = RestaurantController
    this.initRoutes();
  }

  private initRoutes(): void {


    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.RESTAURANT}list`,
      handler: RestaurantController.getRestaurants,
    });
    /* #endregion */
  }
}
