import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AuthenticateUserController } from './authenticateController';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';

const userRepository = UsersRepository.getInstance();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
