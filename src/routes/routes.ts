import { ServerRoute } from "@hapi/hapi";
import UserRoutes from "./web/v1/UserRoutes";
const routes : ServerRoute[] = [...UserRoutes.route];

export default routes;