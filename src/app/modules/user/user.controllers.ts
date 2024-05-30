import { NextFunction, Request, Response } from 'express';
import { userService } from './user.services';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    //     const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await userService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
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
