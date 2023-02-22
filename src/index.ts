import express from 'express';
import { usersRoutes } from './routes/users.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { connection, createConnectionDataBase } from './database/db';
import { createTableUser, userModel } from './database/models/users';
import { createTableOrder, orderModel } from './database/models/orders';
import { clientModel, createTableClients } from './database/models/clients';
import { clientsRoutes } from './routes/clients.routes';
import { ordersRoutes } from './routes/orders.routes';
import { authenticateUserRoutes } from './routes/authenticate.routes';
import { ErrorMiddleware } from './middlewares/error';

createConnectionDataBase();
createTableUser(userModel);
createTableOrder(orderModel);
createTableClients(clientModel);

const app = express();

app.use(express.json());
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return;
  }
);

app.use('/users', usersRoutes);
app.use('/clients', clientsRoutes);
app.use('/orders', ordersRoutes);
app.use('/sessions', authenticateUserRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
