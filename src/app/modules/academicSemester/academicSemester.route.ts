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
router.get(
  '/get-all-academic-semesters',
  academicSemesterControllers.getAllAcademicSemester,
);
router.get('/:id', academicSemesterControllers.getSingleAcademicSemester);
router.patch('/:id', academicSemesterControllers.updateAcademicSemester);

export const academicSemesterRoutes = router;
