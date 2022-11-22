import { Router } from 'express';
import { createOrdersController } from '../module/orders/useCases/createOrder';
import { listAllOrdersController } from '../module/orders/useCases/listOrders';

const ordersRoutes = Router();

ordersRoutes.post('/', (request, response) => {
  createOrdersController.handle(request, response);
});

ordersRoutes.get('/:user_id', (request, response) => {
  listAllOrdersController.handle(request, response);
});

export { ordersRoutes };
