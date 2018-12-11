import gql from 'graphql-tag';

export const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExercise($input: UpdateExerciseInput!) {
    updateExercise(input: $input) {
      exercise {
        id
        name
        sets
        reps
      }
      errors {
        path
        message
      }
    }
  }
`;
