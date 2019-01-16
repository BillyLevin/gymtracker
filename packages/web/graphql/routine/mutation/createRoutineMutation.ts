import gql from 'graphql-tag';

export const CREATE_ROUTINE_MUTATION = gql`
  mutation CreateRoutine($input: CreateRoutineInput!) {
    createRoutine(input: $input) {
      routine {
        id
        name
      }
      errors {
        path
        message
      }
    }
  }
`;
