"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const PasswordHelper = {
    hashPassword: (password) => bcrypt_1.default.hashSync(password, saltRounds)
};
exports.default = PasswordHelper;
