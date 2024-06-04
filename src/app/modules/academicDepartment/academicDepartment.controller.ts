import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic department is create successfully',
    data: result,
  });
});
const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getAcademicDepartmentsIntoDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic departments retrieved successfully',
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await academicDepartmentServices.getSingleAcademicDepartmentIntoDB(
      departmentId,
    );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic single department retrieved successfully',
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const updateAcademicDepartmentData = req.body;
  const result =
    await academicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      updateAcademicDepartmentData,
    );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic department updated successfully',
    data: result,
  });
});

export const academicDepartmentsController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
