import gql from 'graphql-tag';

export const CREATE_INGREDIENT_MUTATION = gql`
  mutation CreateIngredient($input: CreateIngredientInput!) {
    createIngredient(input: $input) {
      ingredient {
        id
        name
        calories
        protein
        userId
      }
      errors {
        path
        message
      }
    }
  }
`;
