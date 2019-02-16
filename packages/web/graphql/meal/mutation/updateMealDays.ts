import gql from 'graphql-tag';

export const UPDATE_MEAL_DAYS_MUTATION = gql`
  mutation UpdateMealDays($input: UpdateMealDaysInput!) {
    updateMealDays(input: $input) {
      errors {
        path
        message
      }
    }
  }
`;
