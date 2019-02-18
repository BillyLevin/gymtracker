import { Field, Formik } from 'formik';
import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { FaPlusCircle } from 'react-icons/fa';
import { UPDATE_MEAL_DAYS_MUTATION } from '../../graphql/meal/mutation/updateMealDays';
import { GET_MEALS_QUERY } from '../../graphql/meal/query/getMeals';
import { GET_MEALS_BY_DAY } from '../../graphql/meal/query/getMealsByDay';
import { GetMeals, UpdateMealDays, UpdateMealDaysVariables } from '../../lib/schema-types';
import { Meal } from '../../types/Meal';
import { normalizeErrors } from '../../utils/normalizeErrors';
import InputGroup from '../InputGroup';

interface FormValues {
  meal?: Meal;
}

interface Props {
  day: string;
}

const getMealOptions = (meals: Meal[], day: string) => {
  const options = meals.reduce(
    (prevOptions, meal) => {
      if (meal.days.length && meal.days.indexOf(day) === -1) {
        const option = { label: meal.name, value: meal };
        prevOptions.push(option);
      }
      if (!meal.days.length) {
        prevOptions.push({ label: meal.name, value: meal });
      }
      return prevOptions;
    },
    [] as any,
  );
  return options;
};

const AddMeal: React.FC<Props> = ({ day }) => (
  <Query<GetMeals> query={GET_MEALS_QUERY}>
    {({ data }) => {
      if (data && data.getMeals && data.getMeals.meals && data.getMeals.meals.length) {
        const mealOptions = getMealOptions(data.getMeals.meals, day);
        if (mealOptions.length) {
          return (
            <Mutation<UpdateMealDays, UpdateMealDaysVariables> mutation={UPDATE_MEAL_DAYS_MUTATION}>
              {mutate => (
                <Formik<FormValues>
                  initialValues={{ meal: undefined }}
                  onSubmit={async (input, { setErrors, setSubmitting }) => {
                    const { meal } = input;

                    if (meal) {
                      const { id } = meal;
                      const optimisticMeal = meal;
                      optimisticMeal.days.push(day);
                      const response = await mutate({
                        variables: { input: { id, day } },
                        optimisticResponse: {
                          updateMealDays: {
                            // @ts-ignore
                            __typename: 'Mutation',
                            errors: [],
                            meal: { ...optimisticMeal },
                          },
                        },
                        update: cache => {
                          const {
                            getMealsByDay: { meals },
                          }: any = cache.readQuery({ query: GET_MEALS_BY_DAY, variables: { day } });

                          meals.push({ ...input.meal });

                          cache.writeQuery({
                            query: GET_MEALS_BY_DAY,
                            variables: { day },
                            data: {
                              __typename: 'Query',
                              getMealsByDay: { __typename: 'Query', meals },
                            },
                          });
                        },
                      });
                      if (
                        response &&
                        response.data &&
                        response.data.updateMealDays.errors &&
                        response.data.updateMealDays.errors.length
                      ) {
                        setSubmitting(false);
                        return setErrors(normalizeErrors(response.data.updateMealDays.errors));
                      } else {
                        setSubmitting(false);
                        return;
                      }
                    } else {
                      setSubmitting(false);
                      return setErrors({ meal: 'You need to select a meal' });
                    }
                  }}
                >
                  {({ handleSubmit, isSubmitting, values }) => (
                    <form onSubmit={handleSubmit} className="add-meal">
                      <Field
                        name="meal"
                        placeholder="Select meal..."
                        label="Add Meal"
                        component={InputGroup}
                        options={mealOptions}
                        inputType="select"
                        value={values.meal}
                      />
                      <button type="submit" disabled={isSubmitting}>
                        <FaPlusCircle />
                      </button>
                    </form>
                  )}
                </Formik>
              )}
            </Mutation>
          );
        }
      }
      return null;
    }}
  </Query>
);

export default AddMeal;
