import * as yup from 'yup';

export const routineSchema = yup.object().shape({
  name: yup.string().required(),
  day: yup.string().required(),
  exercises: yup
    .array()
    .min(1)
    .required(),
});
