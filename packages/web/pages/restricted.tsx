import * as React from 'react';
// import { NextContextWithApollo } from '../types/NextContextWithApollo';
// import checkLoggedIn from '../lib/checkLoggedIn';
// import redirect from '../lib/redirect';
// import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
// import { NextContext } from 'next';

class Restricted extends React.Component {
  static async getInitialProps(ctx: any) {
    console.log(ctx);
    // const { user }: any = await checkLoggedIn(apolloClient);

    // if (user) {
    //   redirect(ctx, '/');
    // }

    // return {
    //   user,
    // };
    return {};
  }
  render() {
    return <p>hello</p>;
  }
}

export default Restricted;
