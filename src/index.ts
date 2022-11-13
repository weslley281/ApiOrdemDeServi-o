import express from 'express';
import { establishConnection } from './database/db';
import { usersRoutes } from './routes/users.routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';
establishConnection();

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
