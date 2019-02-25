import gql from 'graphql-tag';

export const GET_MEAL_BY_ID_QUERY = gql`
  query GetMealById($id: String!) {
    getMealById(id: $id) {
      meal {
        id
        name
        totalCalories
        totalProtein
      }
    }
  }
`;
