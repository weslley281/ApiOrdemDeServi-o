import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { CreateOrdersController } from './CreateOrdersController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const orderRepository = OrdersRepository.getInstance();
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const createOrdersController = new CreateOrdersController(createOrderUseCase);

export { createOrdersController };
