import AppError from '../../errors/appError';
import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const isDepartmentExist = await AcademicDepartmentModel.findOne({
    name: payload.name,
  });
  if (isDepartmentExist) {
    throw new AppError(409, 'This department is already exit!!');
  }
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};
const getAcademicDepartmentsIntoDB = async () => {
  const result =
    await AcademicDepartmentModel.find().populate('academicFaculty');
  return result;
};
const getSingleAcademicDepartmentIntoDB = async (id: string) => {
  const result =
    await AcademicDepartmentModel.findById(id).populate('academicFaculty');
  return result;
};
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true },
  );
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAcademicDepartmentsIntoDB,
  getSingleAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
};
