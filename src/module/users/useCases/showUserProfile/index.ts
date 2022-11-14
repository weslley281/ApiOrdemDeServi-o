import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { ShowUserProfileController } from './ShowUserProfileController';
import { ShowUserProfileUseCase } from './showUserProfileUseCase';

const userRepository = UsersRepository.getInstance();
const showUserProfileUseCase = new ShowUserProfileUseCase(userRepository);
const showUserProfileController = new ShowUserProfileController(
  showUserProfileUseCase
);

export { showUserProfileController };
