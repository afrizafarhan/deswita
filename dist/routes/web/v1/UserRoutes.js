"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../../../controllers/api/UserController"));
const basePath = '/api/v1/';
const UserRoutes = {
    name: 'user_routes_v1',
    route: [{
            method: 'POST',
            path: basePath + 'signup',
            handler: UserController_1.default.signup.handler,
        }]
};
exports.default = UserRoutes;
