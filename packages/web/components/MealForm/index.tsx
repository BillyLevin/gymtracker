import { mealSchema } from '@gym-tracker/common';
import { Field, Formik } from 'formik';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { CREATE_MEAL_MUTATION } from '../../graphql/meal/mutation/createMeal';
import { CreateMeal, CreateMealVariables } from '../../lib/schema-types';
import { Ingredient } from '../../types/Ingredient';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Button from '../Button';
import InputGroup from '../InputGroup';
import './MealForm.scss';

interface FormValues {
  name: string;
}

interface Props {
  ingredients: Ingredient[];
}

const MealForm: React.FC<Props> = ({ ingredients }) => (
  <Mutation<CreateMeal, CreateMealVariables> mutation={CREATE_MEAL_MUTATION}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ name: '' }}
        validationSchema={mealSchema}
        onSubmit={async (input, { setSubmitting, setErrors }) => {
          const response = await mutate({
            variables: { input: { name: input.name, ingredients } },
          });
          if (
            response &&
            response.data &&
            response.data.createMeal.errors &&
            response.data.createMeal.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.createMeal.errors));
          } else {
            Router.push('/meals');
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="meal-form">
            <Field
              name="name"
              component={InputGroup}
              placeholder="Chicken curry..."
              label="Meal Name"
            />
            <Button type="submit" theme="primary" disabled={isSubmitting}>
              Create meal
            </Button>
          </form>
        )}
      </Formik>
    )}
  </Mutation>
);

export default MealForm;
