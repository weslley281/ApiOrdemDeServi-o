import { Router } from 'express';
import { createOrdersController } from '../module/orders/useCases/createOrder';

const ordersRoutes = Router();

ordersRoutes.post('/', (request, response) => {
  createOrdersController.handle(request, response);
});

export { ordersRoutes };
