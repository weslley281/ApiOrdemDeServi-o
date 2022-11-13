"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../module/users/useCases/createUser");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/', (request, response) => {
    createUser_1.createUserController.handle(request, response);
});
