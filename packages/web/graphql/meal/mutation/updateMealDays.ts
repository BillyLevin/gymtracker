import gql from 'graphql-tag';

export const UPDATE_MEAL_DAYS_MUTATION = gql`
  mutation UpdateMealDays($input: UpdateMealDaysInput!) {
    updateMealDays(input: $input) {
      meal {
        id
        name
        totalCalories
        totalProtein
        days
      }
      errors {
        path
        message
      }
    }
  }
`;
