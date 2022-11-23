import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AuthenticateUserController } from './AuthenticateController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

const userRepository = UsersRepository.getInstance();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
