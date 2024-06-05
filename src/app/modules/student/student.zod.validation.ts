import { z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, "First Name can't be more than 20 characters.")
    .trim()
    .nonempty('First name is required.'),
  middleName: z
    .string()
    .max(20, "Middle Name can't be more than 20 characters.")
    .trim()
    .optional(),
  lastName: z
    .string()
    .max(20, "Last Name can't be more than 20 characters.")
    .trim()
    .nonempty('Last name is required.'),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .max(30, "Father Name can't be more than 30 characters.")
    .trim()
    .nonempty('Father name is required.'),
  fatherOccupation: z
    .string()
    .trim()
    .nonempty('Father occupation is required.'),
  fatherContactNo: z.string().trim().nonempty('Father contact no is required.'),
  motherName: z
    .string()
    .max(30, "Mother Name can't be more than 30 characters.")
    .trim()
    .nonempty('Mother name is required.'),
  motherOccupation: z
    .string()
    .trim()
    .nonempty('Mother occupation is required.'),
  motherContactNo: z.string().trim().nonempty('Mother contact no is required.'),
});

// Define the LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .max(30, "Local guardian Name can't be more than 30 characters.")
    .trim()
    .nonempty('Local guardian name is required.'),
  occupation: z
    .string()
    .trim()
    .nonempty('Local guardian occupation is required.'),
  contactNo: z
    .string()
    .trim()
    .nonempty('Local guardian contact no is required.'),
  address: z.string().trim().nonempty('Local guardian address is required.'),
});

// Define the Student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'others'], {
        errorMap: () => ({
          message:
            "The gender field can only be one of the following: 'male', 'female', 'others'",
        }),
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email('Invalid email format')
        .trim()
        .nonempty('Email is required.'),
      contactNo: z.string().trim().nonempty('Contact no is required.'),
      emergencyContactNo: z
        .string()
        .trim()
        .nonempty('Emergency contact no is required.'),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], {
          errorMap: () => ({ message: '{VALUE} is not valid.' }),
        })
        .optional(),
      presentAddress: z
        .string()
        .trim()
        .nonempty('Present address is required.'),
      permanentAddress: z
        .string()
        .trim()
        .nonempty('Permanent address is required.'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
