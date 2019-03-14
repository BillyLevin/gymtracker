import gql from 'graphql-tag';

export const mealInfoFragment = gql`
  fragment MealInfo on Meal {
    id
    name
    totalCalories
    totalProtein
    days
  }
`;
