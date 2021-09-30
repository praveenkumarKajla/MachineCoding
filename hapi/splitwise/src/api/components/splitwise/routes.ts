import { Server } from "@hapi/hapi";
import { Routes } from "@config/routes_config";

import { ExpenseController } from "./controller";
import { UserService } from "@services/user";

export class ExpenseRoutes {
  private server: Server;

  private controller;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = ExpenseController
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
          console.log(credentials)
          const res = await UserService.login(credentials)
          return res
        }
      }
    })


    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.EXPENSE}{groupId}/new/`,
      handler: ExpenseController.addExpense,
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.GROUPS}`,
      handler: ExpenseController.addGroup,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX + Routes.ROUTES.EXPENSE}{groupId}/`,
      handler: ExpenseController.getExpenses,
    });
    /* #endregion */
  }
}
