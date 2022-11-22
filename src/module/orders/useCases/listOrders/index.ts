import { UsersRepository } from '../../../users/repositories/implementations/UsersRepository';
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { ListAllOrdersController } from './ListAllOrdersController';
import { ListAllOrdersUseCase } from './ListAllOrderUseCase';

const usersRepository = UsersRepository.getInstance();
const ordersRepository = OrdersRepository.getInstance();
const listAllOrdersUseCase = new ListAllOrdersUseCase(
  ordersRepository,
  usersRepository
);
const listAllOrdersController = new ListAllOrdersController(
  listAllOrdersUseCase
);

export { listAllOrdersController };
