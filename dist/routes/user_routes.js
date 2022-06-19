"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../model/User"));
const userRoutes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, h) => {
            const user = new User_1.default("han", "han@gmail.com", "hansu", "123hansu");
            return h.response(user);
        }
    },
    {
        method: 'POST',
        path: '/user',
        handler: (req, h) => {
            console.log(req.query);
            return h.response("Success");
        }
    }
];
exports.default = userRoutes;
