import { NextFunction, Request, Response } from 'express';
import { userService } from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    //     const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await userService.createStudentIntoDB(password, studentData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
