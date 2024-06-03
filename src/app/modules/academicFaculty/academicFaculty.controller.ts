import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicFacultiesService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultiesService.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic faculty is create successfully',
    data: result,
  });
});
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await academicFacultiesService.getAcademicFacultiesIntoDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic faculties retrieved successfully',
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await academicFacultiesService.getSingleAcademicFacultyIntoDB(facultyId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic single faculty retrieved successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const updateAcademicFacultyData = req.body;
  const result = await academicFacultiesService.updateAcademicFacultyIntoDB(
    facultyId,
    updateAcademicFacultyData,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic faculty updated successfully',
    data: result,
  });
});

export const academicFacultiesController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
