import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { createOrdersController } from '../module/orders/useCases/createOrder';
import { listAllOrdersController } from '../module/orders/useCases/listOrders';

const ordersRoutes = Router();

ordersRoutes.use(ensureAuthenticated);
ordersRoutes.post('/', (request, response) => {
  createOrdersController.handle(request, response);
});

ordersRoutes.get('/:user_id', (request, response) => {
  listAllOrdersController.handle(request, response);
});

export { ordersRoutes };
