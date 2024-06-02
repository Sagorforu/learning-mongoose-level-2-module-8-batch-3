import config from '../../config';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};
  // if password is not given, use default password
  if (!password) {
    userData.password = config.default_pass as string;
  } else {
    userData.password = password;
  }
  userData.role = 'student';

  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  // set manually auto generated id
  userData.id = await generateStudentId(admissionSemester);
  // create a user model
  const newUser = await UserModel.create(userData);
  // Create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // reference id
    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
