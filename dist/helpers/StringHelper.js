"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringHelper = {
    email: {
        getEmailName: (email) => {
            return email.split('@').shift();
        }
    }
};
exports.default = StringHelper;
