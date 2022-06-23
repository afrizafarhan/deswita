import UserController from "../../../controllers/api/UserController";
import {Server} from "hapi";
const basePath = '/api/v1/';
const UserRoutes = {
  name: 'user_routes_v1',
  route: [{
    method: 'POST',
    path: basePath + 'signup',
    handler: UserController.signup,
  }]
}

export default UserRoutes;