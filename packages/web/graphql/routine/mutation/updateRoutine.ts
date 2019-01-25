import gql from 'graphql-tag';

export const UPDATE_ROUTINE_MUTATION = gql`
  mutation UpdateRoutine($input: UpdateRoutineInput!) {
    updateRoutine(input: $input) {
      routine {
        id
        name
        day
      }
      errors {
        path
        message
      }
    }
  }
`;
