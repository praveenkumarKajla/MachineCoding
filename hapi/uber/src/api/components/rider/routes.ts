import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import { RiderController } from "./controller";
import { RiderService } from "@services/rider";
import { generateToken } from "@services/auth/jwt";

export class RiderRoutes {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;
  private jwtAuthorization = "jwtAuthorization";

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = RiderController
    this.initRoutes();
  }

  private initRoutes(): void {


    this.server.route({
      method: 'GET', // Must handle both GET and POST
      path: '/login', // The callback endpoint registered with the provider
      options: {
        auth: "google",
        handler: async function (request, h) {

          const { credentials, isAuthenticated } = request.auth
          if (!isAuthenticated) {
            return `Authentication failed due to: ${request.auth.error.message}`;
          }
          const rider = await RiderService.register(credentials)
          const data = { ...rider }
          const info = generateToken(data)
          return { ...data, token: info }
        }
      }
    })

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.RIDER}`,
      handler: RiderController.getRides,
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
