import { Request, ResponseToolkit, ServerRoute } from "@hapi/hapi";
import User from "../model/User";
const userRoutes : ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    handler: (req: Request, h: ResponseToolkit) => {
      const user : User = new User(
        "han",
        "han@gmail.com",
        "hansu",
        "123hansu"
      );
      return h.response(user);
    }
  },
  {
    method: 'POST',
    path: '/user',
    handler: (req: Request, h: ResponseToolkit) => {
      console.log(req.query)
      return h.response("Success");
    }
  }
];

export default userRoutes;