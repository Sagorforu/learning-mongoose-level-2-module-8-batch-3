import express from 'express';
import { userControllers } from './user.controllers';
import validateRequest from '../../middlewares/validateRequests';
import { createStudentValidationSchema } from '../student/student.zod.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userControllers.createStudent,
);

export const userRoutes = router;
