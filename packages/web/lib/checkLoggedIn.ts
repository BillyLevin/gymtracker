import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { ME_QUERY } from '../graphql/user/query/me';
import { Me } from './schema-types';

export default async (apolloClient: ApolloClient<NormalizedCacheObject>) => {
  const {
    data: { me },
  } = await apolloClient.query<Me>({ query: ME_QUERY });

  if (me) {
    return {
      me,
    };
  }

  return {
    me: null,
  };
};
