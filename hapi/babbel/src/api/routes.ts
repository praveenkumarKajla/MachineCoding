import { Server } from "@hapi/hapi";

import { LessonRoutes } from "./components/lessons/routes";
import { CourseRoutes } from "./components/courses/routes";

import { UserRoutes } from "@components/users/routes";
import { LanguageRoutes } from "@components/languages/routes";
import { SERVER_CONFIG } from "@config/server_config";

const { BASE_URL, API_VERSION } = SERVER_CONFIG;
const ROUTE_PREFIX_V1 = BASE_URL + API_VERSION;

export function initAllRoutes(server: Server): void {
  const userRoutes = new UserRoutes(server, ROUTE_PREFIX_V1);
  const languageRoutes = new LanguageRoutes(server, ROUTE_PREFIX_V1);
  const lessonRoutes = new LessonRoutes(server, ROUTE_PREFIX_V1);
  const courseRoutes = new CourseRoutes(server, ROUTE_PREFIX_V1);
  const table = server.table();
  console.log(table.map(x => ({ method: x.method, path: x.path })));
}
