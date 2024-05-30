import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'password can not be longer than 20 characters.' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
