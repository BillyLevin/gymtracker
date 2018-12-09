import Layout from '../components/Layout';
import { Query } from 'react-apollo';
import { Me } from '../lib/schema-types';
import { ME_QUERY } from '../graphql/user/query/me';

export default () => (
  <Layout title="Me">
    <Query<Me> query={ME_QUERY} ssr={false}>
      {({ loading, data }) => {
        if (loading) return null;
        return <p>{JSON.stringify(data)}</p>;
      }}
    </Query>
  </Layout>
);
