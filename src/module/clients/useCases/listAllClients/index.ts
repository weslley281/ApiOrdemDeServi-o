import { UsersRepository } from '../../../users/repositories/implementations/UsersRepository';
import { ClientsRepository } from '../../repository/implementations/ClientsRepository';
import { ListAllClientsController } from './ListAllClientsController';
import { ListAllClientsUseCase } from './ListAllClientsUseCase';

const clientsRepository = ClientsRepository.getInstance();
const usersRepository = UsersRepository.getInstance();
const listAllClientsUseCase = new ListAllClientsUseCase(
  clientsRepository,
  usersRepository
);
const listAllClientsController = new ListAllClientsController(
  listAllClientsUseCase
);

export { listAllClientsController };
