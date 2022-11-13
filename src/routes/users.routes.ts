import { Router } from 'express';
import { createUserController } from '../module/users/useCases/createUser';

const usersRouters = Router();

usersRouters.post('/', (request, response) => {
  createUserController.handle(request, response);
});

export { usersRouters };
