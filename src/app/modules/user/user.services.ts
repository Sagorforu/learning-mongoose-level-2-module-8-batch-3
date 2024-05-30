import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password

  if (!password) {
    userData.password = config.default_pass as string;
  } else {
    userData.password = password;
  }
  userData.role = 'student';

  // set manually auto generated id
  userData.id = '2030100001';

  // create a user model
  const newUser = await UserModel.create(userData);

  // Create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference id
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
