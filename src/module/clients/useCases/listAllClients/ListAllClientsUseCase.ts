import { IUserRepository } from '../../../users/repositories/IUsersPepository';
import { Clients } from '../../models/Clients';
import { IClientsRepository } from '../../repository/IClientsRepository';

interface IRequest {
  user_id: number;
}

class ListAllClientsUseCase {
  constructor(
    private clientsRepository: IClientsRepository,
    private usersRepository: IUserRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<Clients[]> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) throw new Error('User not exists');

    return this.clientsRepository.listClients();
  }
}

export { ListAllClientsUseCase };
