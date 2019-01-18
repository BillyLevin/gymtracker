import gql from 'graphql-tag';

export const GET_ROUTINES_QUERY = gql`
  query GetRoutines {
    getRoutines {
      routines {
        id
        name
        day
        userId
      }
    }
  }
`;
