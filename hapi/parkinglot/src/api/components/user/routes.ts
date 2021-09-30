import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import { UserController } from "./controller";
import { UserService } from "@services/user";
import { generateToken } from "@services/auth/jwt";

export class UserRoutes {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;
  private jwtAuthorization = "jwtAuthorization";

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = UserController;
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "GET", // Must handle both GET and POST
      path: "/login", // The callback endpoint registered with the provider
      options: {
        auth: "google",
        handler: async function (request, h) {
          const { credentials, isAuthenticated } = request.auth;
          if (!isAuthenticated) {
            return `Authentication failed due to: ${request.auth.error.message}`;
          }
          const user = await UserService.register(credentials);
          const data = { ...user };
          const info = generateToken(data);
          return { ...data, token: info };
        },
      },
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.USERS}`,
      handler: UserController.getUser,
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
