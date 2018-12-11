import gql from 'graphql-tag';

export const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExercise($id: String!) {
    deleteExercise(id: $id) {
      ok
    }
  }
`;
