import gql from 'graphql-tag';
import { mealInfoFragment } from './MealInfo';

export const GET_MEALS_QUERY = gql`
  query GetMeals {
    getMeals {
      meals {
        ...MealInfo
      }
    }
  }
  ${mealInfoFragment}
`;
