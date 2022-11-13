"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const encryptPassword_1 = require("../encryptPassword/encryptPassword");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle(request, response) {
        try {
            const { name, phone, email, admin, password, created_at } = request.body;
            const encryptedpassword = (0, encryptPassword_1.encryptPassword)(password);
            const user = this.createUserUseCase.execute({
                name,
                phone,
                email,
                admin,
                encryptedpassword,
                created_at,
            });
            return response.status(201).json(user);
        }
        catch (error) {
            console.log(error);
            return response.status(400).json({ error: 'Erro ao cadastrar usuário' });
        }
    }
}
exports.CreateUserController = CreateUserController;
