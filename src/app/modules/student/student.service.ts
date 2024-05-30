import { StudentModel } from './student.model';

const getStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentIntoDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const deleteSingleStudentIntoDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getStudentIntoDB,
  getSingleStudentIntoDB,
  deleteSingleStudentIntoDB,
};
