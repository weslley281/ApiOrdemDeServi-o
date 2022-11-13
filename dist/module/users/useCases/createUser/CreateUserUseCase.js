"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute({ name, phone, email, admin, encryptedpassword, created_at, }) {
        const userAlreadyExists = this.usersRepository.findByEmail(email);
        console.log('verdadeiro ? ' + userAlreadyExists);
        if (userAlreadyExists)
            throw new Error('User already exists');
        return this.usersRepository.create({
            name,
            phone,
            email,
            admin,
            encryptedpassword,
            created_at,
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
