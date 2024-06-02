import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterService.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester is create successfully',
    data: result,
  });
});
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterService.getAllAcademicSemesterIntoDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semesters retrieved successfully',
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await academicSemesterService.getSingleAcademicSemesterIntoDB(semesterId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic single Semester retrieved successfully',
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const updateAcademicSemesterData = req.body;
  const result = await academicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    updateAcademicSemesterData,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester updated successfully',
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
