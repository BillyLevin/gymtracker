import gql from 'graphql-tag';
import { mealInfoFragment } from './MealInfo';

export const GET_MEALS_BY_DAY = gql`
  query GetMealsByDay($day: String!) {
    getMealsByDay(day: $day) {
      meals {
        ...MealInfo
      }
    }
  }
  ${mealInfoFragment}
`;
