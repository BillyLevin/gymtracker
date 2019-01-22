import gql from 'graphql-tag';

export const GET_EXERCISES_BY_ROUTINE = gql`
  query GetExercisesByRoutine($routineId: String!) {
    getExercisesByRoutine(routineId: $routineId) {
      exercises {
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
