import * as yup from 'yup';

export const exerciseSchema = yup.object().shape({
  name: yup.string().required(),
  reps: yup
    .number()
    .min(1, "You can't do zero reps!")
    .required(),
  sets: yup
    .number()
    .min(1, "You can't do zero sets!")
    .required(),
});
