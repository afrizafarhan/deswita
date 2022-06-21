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
const client_1 = require("@prisma/client");
const User_1 = __importDefault(require("../model/User"));
const prisma = new client_1.PrismaClient();
const UserService = {
    addNewUser: (user) => {
        return User_1.default.createUser(user, prisma)
            .then((res) => {
            return {
                status: 201,
                message: 'Success add user'
            };
        })
            .catch(e => {
            throw e;
        })
            .finally(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma.$disconnect;
        }));
    }
};
exports.default = UserService;
