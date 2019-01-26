import * as yup from 'yup';

export const ingredientSchema = yup.object().shape({
  name: yup.string().required(),
  calories: yup.number().required(),
  protein: yup.number().required(),
});
