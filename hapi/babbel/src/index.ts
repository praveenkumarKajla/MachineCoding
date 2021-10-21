import "module-alias/register";
import { Request, Server } from "@hapi/hapi";
import * as hapiCookie from "@hapi/cookie";
import * as inert from "@hapi/inert";

import { SERVER_CONFIG } from "@config/server_config";
import { initAllRoutes } from "@api/routes";
import { ensureTablesExist } from "@services/db/startup";

const { HOST, PORT } = SERVER_CONFIG;

const server: Server = new Server({
  port: PORT,
  host: HOST,
});

export const init = async () => {
  await server.register(hapiCookie);
  await server.register(inert);
  server.auth.strategy("session", "cookie", {

    cookie: {
      name: "sid-babbel",
      password: SERVER_CONFIG.SECRET_PASSWORD,
      isSecure: false,
      ttl: 86400000,
      path: "/",
    },

  });
  server.auth.default("session");
  await ensureTablesExist();
  initAllRoutes(server);
  try {
    server.events.on("response", (request : Request) => {
      console.log(request.payload);
      console.log(`${request.info.remoteAddress}: ${request.method.toUpperCase()} ${request.path} --> ${request.response}`);
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (e) {
    console.error("Error running server", e);
  }
};

process.on("unhandledRejection", (reason, p) => {
  console.log("UnhandledRejection", p, "reason:", reason);
});

init().then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);
export { server };
