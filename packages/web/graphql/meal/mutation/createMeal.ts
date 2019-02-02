import gql from 'graphql-tag';

export const CREATE_MEAL_MUTATION = gql`
  mutation CreateMeal($input: CreateMealInput!) {
    createMeal(input: $input) {
      meal {
        id
        name
        totalCalories
        totalProtein
      }
      errors {
        path
        message
      }
    }
  }
`;
