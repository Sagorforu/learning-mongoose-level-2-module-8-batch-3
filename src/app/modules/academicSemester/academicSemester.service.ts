import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
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
  updateAcademicSemester: TAcademicSemester,
) => {
  if (
    academicSemesterNameCodeMapper[updateAcademicSemester.name] !==
    updateAcademicSemester.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.findByIdAndUpdate(
    { _id: id },
    updateAcademicSemester,
  );
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
