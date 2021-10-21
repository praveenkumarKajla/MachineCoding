import { Request, Server } from "@hapi/hapi";

import { UserController } from ".";

export class UserRoutes {
  private server: Server;

  private route = "users/"

  private imageRoute = "image/"

  private controller: UserController;

  private ROUTE_PREFIX: string;

  public constructor(server: Server, ROUTE_PREFIX: string) {
    this.server = server;
    this.ROUTE_PREFIX = ROUTE_PREFIX;
    this.controller = new UserController();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}`,

      handler: (request, h) => h.response(`Successfully logged in as ${request.auth.credentials.username}` as any),
    });
    // Auth Routes
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}login/`,
      options: {
        auth: {
          mode: "try",
        },
        plugins: {
          "hapi-auth-cookie": {
            redirectTo: false,
          },
        },
      },
      handler: () => `
      <html><head><title>Login page</title></head><body>
      <form method="post" action="/v1/login/">
        Username: <input type="text" name="username"><br>
        Password: <input type="password" name="password"><br></a>
      <input type="submit" value="Login"></form>
      </body></html>
        `,
    });
    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}signout/`,
      options: {
        auth: {
          mode: "try",
        },
        plugins: {
          "hapi-auth-cookie": {
            redirectTo: false,
          },
        },
      },
      handler: (request: Request, h) => {
        request.cookieAuth.clear();
        return h.response("Successfully Signed out!");
      },
    });

    // User Routes
    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX}login/`,
      options: {
        auth: {
          mode: "try",
        },
      },
      handler: this.controller.login,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.imageRoute}{path}`,
      options: {
        auth: false,
      },
      handler: this.controller.getImage,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      options: {
        auth: false,
      },
      handler: this.controller.getUsers,
    });

    this.server.route({
      method: "GET",
      path: `${this.ROUTE_PREFIX}${this.route}me/`,
      handler: this.controller.getUser,
    });

    this.server.route({
      method: "POST",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      options: {
        auth: false,
        payload: {
          parse: true,
          multipart: {
            output: "stream",
          },
          maxBytes: 1000 * 1000 * 5, // 5 Mb
        },
      },
      handler: this.controller.addUser,
    });

    this.server.route({
      method: "PUT",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      options: {
        payload: {
          parse: true,
          multipart: {
            output: "stream",
          },
          maxBytes: 1000 * 1000 * 5, // 5 Mb
        },
      },
      handler: this.controller.updateUser,
    });

    this.server.route({
      method: "DELETE",
      path: `${this.ROUTE_PREFIX}${this.route}`,
      handler: this.controller.deleteUser,
    });
  }
}
