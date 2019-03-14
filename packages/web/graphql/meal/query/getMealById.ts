import gql from 'graphql-tag';
import { mealInfoFragment } from './MealInfo';

export const GET_MEAL_BY_ID_QUERY = gql`
  query GetMealById($id: String!) {
    getMealById(id: $id) {
      meal {
        ...MealInfo
        ingredients {
          id
          name
          calories
          protein
        }
      }
    }
  }
  ${mealInfoFragment}
`;
