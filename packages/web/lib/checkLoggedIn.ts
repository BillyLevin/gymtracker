import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { Me } from './schema-types';
import { ME_QUERY } from '../graphql/user/query/me';

export default async (apolloClient: ApolloClient<NormalizedCacheObject>) => {
  const {
    data: { me },
  } = await apolloClient.query<Me>({ query: ME_QUERY });

  if (me) {
    return {
      user: me,
    };
  }

  return {
    user: null,
  };
};
