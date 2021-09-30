import "module-alias/register";
import { Server } from "@hapi/hapi";
import * as Bell from "@hapi/bell";

import { SERVER_CONFIG } from "@config/server_config";
import { ensureTablesExist } from "@services/db";
import { initAllRoutes } from "@api/routes";
import { Auth } from "@services/auth";

const { HOST, PORT } = SERVER_CONFIG;

const server: Server = new Server({
  port: PORT,
  host: HOST,
  routes: { cors: true },
  load: {
    sampleInterval: 30000,
    maxEventLoopDelay: 10000,
  },
});

const init = async () => {


  await ensureTablesExist();
  await server.register(Bell);
  server.auth.strategy("google", "bell", {
    provider: "google",
    password: "cookie_encryption_password_secure",
    isSecure: false,
    clientId: "138902499635-jm8glalhhbln9vjmpc1nej8ffn3v41hg.apps.googleusercontent.com",
    clientSecret: "q5zzZUn1Nl1A4SB5PNLu56nl",
    location: "http://localhost.com"
  });
  await initAllRoutes(server);


  try {
    server.events.on("response", (request) => {
      const response: any = request.response || {};
      const error: any = request.auth.error || {};
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (e) {
    console.error("server", e);
  }
};

process.on("unhandledRejection", (reason, p) => {
  console.log("UnhandledRejection", p, "reason:", reason);
});

init();
