import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};
const getAcademicFacultiesIntoDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};
const getSingleAcademicFacultyIntoDB = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true },
  );
  return result;
};

export const academicFacultiesService = {
  createAcademicFacultyIntoDB,
  getAcademicFacultiesIntoDB,
  getSingleAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
};
