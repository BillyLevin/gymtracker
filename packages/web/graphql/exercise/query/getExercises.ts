import gql from 'graphql-tag';

export const GET_EXERCISES_QUERY = gql`
  query GetExercises {
    getExercises {
      exercises {
        id
        name
        reps
        sets
      }
    }
  }
`;
