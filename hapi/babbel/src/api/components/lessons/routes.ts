import { Server } from "@hapi/hapi";

import { LessonController } from ".";

export class LessonRoutes {
  private server: Server;

  private route = "lessons/"

  private controller: LessonController;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = new LessonController();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.getLessons,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.getLesson,
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.addLesson,
    });

    this.server.route({
      method: "PUT",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.updateLesson,
    });

    this.server.route({
      method: "DELETE",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.deleteLesson,
    });
  }
}
