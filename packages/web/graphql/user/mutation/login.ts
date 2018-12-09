import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($data: UserInput!) {
    login(data: $data) {
      user {
        id
        email
      }
      errors {
        path
        message
      }
    }
  }
`;
