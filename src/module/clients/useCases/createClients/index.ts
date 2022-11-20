import { ClientsRepository } from '../../repository/implementations/ClientsRepository';
import { CreateClientsController } from './CreateClientsController';
import { CreateClientsUseCase } from './CreateClientsUseCase';

const clientRepository = ClientsRepository.getInstance();
const createClientsUseCase = new CreateClientsUseCase(clientRepository);
const createClientsController = new CreateClientsController(
  createClientsUseCase
);

export { createClientsController };
