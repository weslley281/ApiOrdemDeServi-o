import { Router } from 'express';
import { authenticateUserController } from '../module/users/useCases/authenticateUser';

const authenticateUserRoutes = Router();

authenticateUserRoutes.post('/', (request, response) => {
  authenticateUserController.handle(request, response);
});

export { authenticateUserRoutes };
