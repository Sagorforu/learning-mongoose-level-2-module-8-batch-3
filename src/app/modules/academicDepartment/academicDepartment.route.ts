import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentsController } from './academicDepartment.controller';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentsController.createAcademicDepartment,
);
router.get('/', academicDepartmentsController.getAllAcademicDepartments);
router.get(
  '/:departmentId',
  academicDepartmentsController.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentsController.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;
