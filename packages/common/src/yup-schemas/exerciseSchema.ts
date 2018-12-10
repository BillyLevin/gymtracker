import * as yup from 'yup';

export const exerciseSchema = yup.object().shape({
  name: yup.string().required(),
  reps: yup.number().required(),
  sets: yup.number().required(),
});
