import express from 'express';
import { establishConnection } from './database/db';
import { usersRoutes } from './routes/users.routes';

establishConnection();

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

export { app };
