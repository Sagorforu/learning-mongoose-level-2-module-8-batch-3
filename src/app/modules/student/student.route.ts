import express from 'express';
import { studentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequests';
import { updateStudentValidationSchema } from './student.zod.validation';

const router = express.Router();

router.get('/', studentControllers.getStudent);
router.get('/:studentId', studentControllers.getSingleStudent);
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  studentControllers.updateSingleStudent,
);
router.delete('/:studentId', studentControllers.deleteSingleStudent);

export const studentRoutes = router;
