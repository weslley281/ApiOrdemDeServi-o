import { IUserRepository } from '../../../users/repositories/IUsersPepository';
import { Orders } from '../../models/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

interface IRequest {
  user_id: number;
}

class ListAllOrdersUseCase {
  constructor(
    private ordersRepository: IOrdersRepository,
    private usersRepository: IUserRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<Orders[]> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) throw new Error('User not exists');

    return this.ordersRepository.listOrders();
  }
}

export { ListAllOrdersUseCase };
