import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentServices.getStudentIntoDB();
    res.status(200).json({
      success: true,
      message: 'All students retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student retrieve successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteSingleStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student delete successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  getStudent,
  getSingleStudent,
  deleteSingleStudent,
};
