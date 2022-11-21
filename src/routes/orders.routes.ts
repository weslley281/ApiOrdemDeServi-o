import { Router } from 'express';
import { createOrdersController } from '../module/orders/useCases/createUser';

const ordersRoutes = Router();

ordersRoutes.post('/', (request, response) => {
  createOrdersController.handle(request, response);
});

export { ordersRoutes };
