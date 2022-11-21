import express from 'express';
import { usersRoutes } from './routes/users.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { connection, createConnectionDataBase } from './database/db';
import { createTableUser, userModel } from './database/models/users';
import { createTableOrder, orderModel } from './database/models/orders';
import { clientModel, createTableClients } from './database/models/clients';
import { clientsRoutes } from './routes/clients.routes';
import { ordersRoutes } from './routes/orders.routes';

createConnectionDataBase(connection);
createTableUser(userModel);
createTableOrder(orderModel);
createTableClients(clientModel);

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/clients', clientsRoutes);
app.use('/orders', ordersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
