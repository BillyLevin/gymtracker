import gql from 'graphql-tag';

export const DELETE_ROUTINE_MUTATION = gql`
  mutation DeleteRoutine($id: String!) {
    deleteRoutine(id: $id) {
      ok
    }
  }
`;
