import gql from 'graphql-tag';

export const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExercise($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      exercise {
        id
        name
        sets
        reps
        userId
      }
      errors {
        path
        message
      }
    }
  }
`;
