import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation($data: UserInput!) {
    register(data: $data) {
      errors {
        path
        message
      }
    }
  }
`;
