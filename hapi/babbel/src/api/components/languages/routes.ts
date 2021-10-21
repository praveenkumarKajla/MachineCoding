import { Server } from "@hapi/hapi";

import { LanguageController } from ".";

export class LanguageRoutes {
  private server: Server;

  private route = "languages/"

  private controller: LanguageController;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = new LanguageController();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.getLanguages,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}{code}/`,
      handler: this.controller.getLanguage,
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.addLanguage,
    });

    this.server.route({
      method: "PUT",
      path: `${this.ROUTE_PREFIX}${this.route}{code}/`,
      handler: this.controller.updateLanguage,
    });

    this.server.route({
      method: "DELETE",
      path: `${this.ROUTE_PREFIX}${this.route}{code}/`,
      handler: this.controller.deleteLanguage,
    });

    this.server.route({
      method: "DELETE",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.deleteLanguages,
    });
  }
}
