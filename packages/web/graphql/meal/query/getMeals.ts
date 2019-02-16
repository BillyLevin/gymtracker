import gql from 'graphql-tag';

export const GET_MEALS_QUERY = gql`
  query GetMeals {
    getMeals {
      meals {
        id
        name
        totalCalories
        totalProtein
        days
      }
    }
  }
`;
