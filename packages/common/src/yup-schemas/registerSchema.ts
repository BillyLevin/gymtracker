import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(3)
    .max(500)
    .required(),
  password: yup
    .string()
    .min(8)
    .max(1000)
    .required(),
});
