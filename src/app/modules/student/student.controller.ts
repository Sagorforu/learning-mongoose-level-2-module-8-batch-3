import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getStudentIntoDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All students retrieved successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentIntoDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single student retrieve successfully',
    data: result,
  });
});
const updateSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateSingleStudentIntoDB(
    studentId,
    student,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single student update successfully',
    data: result,
  });
});
const deleteSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteSingleStudentIntoDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single student delete successfully',
    data: result,
  });
});

export const studentControllers = {
  getStudent,
  getSingleStudent,
  deleteSingleStudent,
  updateSingleStudent,
};
