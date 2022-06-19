import { Request, ResponseToolkit } from "hapi";

const UserSignup = {
  description: 'Api Sign Up',
  auth: false,
  validate: {
    failAction: (request : Request, h : ResponseToolkit, error : any) => {
      console.log(typeof error)
    }
  },
  handler: async (request : Request, h : ResponseToolkit) => {
    try{

    }catch(e){

    }
  },
  tags: ['api']
}

export default UserSignup;