import {Request, ResponseToolkit} from "hapi";
import userService from "../../service/UserService";
import PasswordHelper from "../../helpers/PasswordHelper";
import StringHelper from "../../helpers/StringHelper";
import ValidationError from "../../errors/ValidationError";
import ResponseHelper from "../../helpers/ResponseHelper";

async function signupHandler(request : Request, h : ResponseToolkit) {
    try{
        const userRequest : UserRequest = request.payload as UserRequest;
        const checkEmailUsed = await userService.emailExist(userRequest.email)
        if(checkEmailUsed){
            throw new ValidationError('Email already used');
        }
        const user: User = {
            name: userRequest.name,
            email: userRequest.email,
            password: PasswordHelper.hashPassword(userRequest.password),
            username: StringHelper.email.getEmailName(userRequest.email)
        }
        const data = await userService.addNewUser(user)
        return h.response(ResponseHelper('success', 'Success add new user')).code(data.status);
    }catch(err: any){
        if(err instanceof ValidationError) {
            return h.response(ResponseHelper('fail', err.message)).code(400);
        }else{
            return h.response(ResponseHelper('fail', err.message)).code(500);
        }
    }
}

export default signupHandler