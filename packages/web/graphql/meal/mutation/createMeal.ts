import gql from 'graphql-tag';

export const CREATE_MEAL_MUTATION = gql`
  mutation CreateMeal($input: CreateMealInput!, $id: String) {
    createMeal(input: $input, id: $id) {
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
