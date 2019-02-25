import React from 'react';
import { GET_MEAL_BY_ID_QUERY } from '../graphql/meal/query/getMealById';
import redirect from '../lib/redirect';
import { GetMealById } from '../lib/schema-types';
import { NextContextWithApollo } from '../types/NextContextWithApollo';

class EditMealPage extends React.Component {
  static async getInitialProps({ apolloClient, query, ...ctx }: NextContextWithApollo) {
    if (!query || (query && !query.id)) {
      redirect(ctx, '/meals');
      return {};
    }

    if (query) {
      const { id } = query;
      const response = await apolloClient.query<GetMealById>({
        query: GET_MEAL_BY_ID_QUERY,
        variables: { id },
      });

      if (
        response &&
        response.data &&
        response.data.getMealById &&
        response.data.getMealById.meal
      ) {
        const { meal } = response.data.getMealById;
        return { meal };
      } else {
        redirect(ctx, '/meals');
        return {};
      }
    }

    return {};
  }
  render() {
    return <p>hello</p>;
  }
}

export default EditMealPage;
