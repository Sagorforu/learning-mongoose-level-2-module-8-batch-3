import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};
const getAllAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};
const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemesterModel.findOne({ _id: id });
  return result;
};
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
