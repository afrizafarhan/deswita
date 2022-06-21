import { Request, ResponseToolkit } from "hapi";
import Joi, {string} from "joi";
import userService from "../../service/UserService";
import StringHelper from "../../helpers/StringHelper";
import PasswordHelper from "../../helpers/PasswordHelper";
const UserController = {
  description: 'Api User',
  signup: {
    handler: async (request : Request, h : ResponseToolkit) => {
      console.log(request.payload)
      try{
        const userRequest : UserRequest = request.payload as UserRequest;
        const user: User = {
          name: userRequest.name,
          email: userRequest.email,
          password: PasswordHelper.hashPassword(userRequest.password),
          username: StringHelper.email.getEmailName(userRequest.email)
        }
        const data = await userService.addNewUser(user)
        return h.response(user)
      }catch({message}){
        return message;
      }
    },
  },
  tags: ['api']
}

export default UserController;