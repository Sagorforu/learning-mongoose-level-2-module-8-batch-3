import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { academicFacultiesController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultiesController.createAcademicFaculty,
);
router.get('/', academicFacultiesController.getAllAcademicFaculties);
router.get('/:facultyId', academicFacultiesController.getSingleAcademicFaculty);
router.patch(
  '/:facultyId',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultiesController.updateAcademicFaculty,
);

export const academicFacultyRoutes = router;
