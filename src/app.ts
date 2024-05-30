/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/user.route';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';

//! parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running and you on the root');
});

//! Global error handler
app.use(globalErrorHandlers);

export default app;
