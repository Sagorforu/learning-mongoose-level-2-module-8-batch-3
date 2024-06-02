import { Schema, model } from 'mongoose';
import {
  StudentModelForStatic,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    maxlength: [20, "First Name can't be more than 20 characters."],
    trim: true,
  },
  middleName: {
    type: String,
    maxlength: [20, "First Name can't be more than 20 characters."],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
    maxlength: [20, "Last Name can't be more than 20 characters."],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required.'],
    maxlength: [30, "Father Name can't be more than 20 characters."],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required.'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact no is required.'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required.'],
    maxlength: [30, "Mother Name can't be more than 20 characters."],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required.'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact no is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required.'],
    maxlength: [30, "Local guardian Name can't be more than 20 characters."],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact no is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required.'],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModelForStatic>({
  id: {
    type: String,
    required: [true, 'Student id is required.'],
    unique: true,
    trim: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required.'],
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message:
        "The gender field can only be one of the following: 'male', 'female', 'others'",
    },
    required: true,
  },
  dateOfBirth: { type: String, trim: true },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact no is required.'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact no is required.'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not valid.',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, 'permanent address is required.'],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required.'],
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian is required.'],
    trim: true,
  },
  profileImg: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Query middleware
studentSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//! Creating a static method
studentSchema.statics.isUserExits = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

export const StudentModel = model<TStudent, StudentModelForStatic>(
  'Student',
  studentSchema,
);
