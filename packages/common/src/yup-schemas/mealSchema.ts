import * as yup from 'yup';

export const mealSchema = yup.object().shape({
  name: yup.string().required(),
});
