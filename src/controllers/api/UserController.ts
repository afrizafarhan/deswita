import signupHandler from "../../handler/user/signup";
const UserController = {
  description: 'Api User',
  signup: signupHandler,
  tags: ['api']
}

export default UserController;