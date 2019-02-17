import { Field, Formik } from 'formik';
import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { FaPlusCircle } from 'react-icons/fa';
import { UPDATE_MEAL_DAYS_MUTATION } from '../../graphql/meal/mutation/updateMealDays';
import { GET_MEALS_QUERY } from '../../graphql/meal/query/getMeals';
import { GetMeals, UpdateMealDays, UpdateMealDaysVariables } from '../../lib/schema-types';
import { Meal } from '../../types/Meal';
import InputGroup from '../InputGroup';

interface FormValues {
  meal: Meal;
}

interface Props {
  day: string;
}

const getMealOptions = (meals: Meal[], day: string) => {
  return [];
};

const AddMeal: React.FC<Props> = ({ day }) => (
  <Query<GetMeals> query={GET_MEALS_QUERY}>
    {({ data }) => {
      if (data && data.getMeals && data.getMeals.meals && data.getMeals.meals.length) {
        const mealOptions = getMealOptions(data.getMeals.meals, day);
        return (
          <Mutation<UpdateMealDays, UpdateMealDaysVariables> mutation={UPDATE_MEAL_DAYS_MUTATION}>
            {mutate => (
              <Formik<FormValues>
                initialValues={{ meal: data.getMeals.meals[0] }}
                onSubmit={input => console.log(input)}
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
                      defaultValue={{
                        label: data.getMeals.meals[0].name,
                        value: data.getMeals.meals[0],
                      }}
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
      return null;
    }}
  </Query>
);

export default AddMeal;
