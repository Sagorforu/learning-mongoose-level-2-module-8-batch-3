import { Router } from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemesterValidation } from './academicSemesterValidation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);
router.get('/', academicSemesterControllers.getAllAcademicSemester);
router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
);

export const academicSemesterRoutes = router;
