import { Server } from "@hapi/hapi";

import { CourseController } from ".";

export class CourseRoutes {
  private server: Server;

  private route = "courses/"

  private controller: CourseController;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = new CourseController();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      options: {
        auth: false,
      },
      handler: this.controller.getCourses,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.getCourse,
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.addCourse,
    });

    this.server.route({
      method: "PUT",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.updateCourse,
    });

    this.server.route({
      method: "DELETE",
      path: `${this.ROUTE_PREFIX}${this.route}{uid}/`,
      handler: this.controller.deleteCourse,
    });
  }
}
