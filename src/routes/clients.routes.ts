import { Router } from 'express';
import { createClientsController } from '../module/clients/useCases/createClients';
import { listAllClientsController } from '../module/clients/useCases/listAllClients';

const clientsRoutes = Router();

clientsRoutes.post('/', (request, response) => {
  createClientsController.handle(request, response);
});

clientsRoutes.get('/:user_id', (request, response) => {
  listAllClientsController.handle(request, response);
});

export { clientsRoutes };
