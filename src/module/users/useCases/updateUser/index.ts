import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './updateUserUseCase';

const userRepository = UsersRepository.getInstance();
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
