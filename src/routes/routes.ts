import userRoutes from "./user_routes";
import { ServerRoute } from "@hapi/hapi";
const routes : ServerRoute[] = [...userRoutes];

export default routes;