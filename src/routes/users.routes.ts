import { Router } from 'express';
import { createUserController } from '../module/users/useCases/createUser';
import { showUserProfileController } from '../module/users/useCases/showUserProfile';
import { updateUserController } from '../module/users/useCases/updateUser';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  createUserController.handle(request, response);
});

usersRoutes.put('/update', (request, response) => {
  updateUserController.handle(request, response);
});

usersRoutes.get('/:user_id', (request, response) => {
  showUserProfileController.handle(request, response);
});

export { usersRoutes };
