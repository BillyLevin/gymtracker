import gql from 'graphql-tag';

export const GET_ROUTINE_BY_ID_QUERY = gql`
  query GetRoutineById($id: String!) {
    getRoutineById(id: $id) {
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
