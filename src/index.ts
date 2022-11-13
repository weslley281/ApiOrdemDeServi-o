import express from 'express';
import { usersRouters } from './routes/users.routes';

const app = express();

app.use('/users', usersRouters);

export { app };
