import { request, response, Router } from 'express';
import { createClientsController } from '../module/clients/useCases/createClients';

const clientsRoutes = Router();

clientsRoutes.post('/', (request, response) => {
  createClientsController.handle(request, response);
});

export { clientsRoutes };
