import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";
import { OrderController } from "./controller";



export class OrderRoutes  {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = OrderController
    this.initRoutes();
  }

  private initRoutes(): void {


    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.ORDER}new`,
      handler: OrderController.newOrder,
    });
    /* #endregion */
  }
}
