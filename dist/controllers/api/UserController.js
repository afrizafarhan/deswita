"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../../service/UserService"));
const StringHelper_1 = __importDefault(require("../../helpers/StringHelper"));
const PasswordHelper_1 = __importDefault(require("../../helpers/PasswordHelper"));
const UserController = {
    description: 'Api User',
    signup: {
        handler: (request, h) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(request.payload);
            try {
                const userRequest = request.payload;
                const user = {
                    name: userRequest.name,
                    email: userRequest.email,
                    password: PasswordHelper_1.default.hashPassword(userRequest.password),
                    username: StringHelper_1.default.email.getEmailName(userRequest.email)
                };
                const data = yield UserService_1.default.addNewUser(user);
                console.log(data);
                return h.response(user);
            }
            catch ({ message }) {
                return message;
            }
        }),
    },
    tags: ['api']
};
exports.default = UserController;
