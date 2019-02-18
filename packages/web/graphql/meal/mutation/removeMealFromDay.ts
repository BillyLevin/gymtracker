import gql from 'graphql-tag';

export const REMOVE_MEAL_FROM_DAY_MUTATION = gql`
  mutation RemoveMealFromDay($input: UpdateMealDaysInput!) {
    removeMealFromDay(input: $input) {
      errors {
        path
        message
      }
    }
  }
`;
