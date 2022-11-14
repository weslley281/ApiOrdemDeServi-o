import { request, response, Router } from 'express';
import { createUserController } from '../module/users/useCases/createUser';
import { showUserProfileController } from '../module/users/useCases/showUserProfile';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  createUserController.handle(request, response);
});

usersRoutes.get('/:user_id', (request, response) => {
  showUserProfileController.handle(request, response);
});

export { usersRoutes };
