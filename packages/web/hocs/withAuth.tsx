import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { NextContextWithApollo } from '../types/NextContextWithApollo';

export const withAuth = (Page: any, redirectPath = '/login') => {
  const WithAuth = (props: any) => <Page {...props} />;

  WithAuth.getInitialProps = async ({ apolloClient, ...ctx }: NextContextWithApollo) => {
    const { me } = await checkLoggedIn(apolloClient);

    console.log('me:', me);

    if (!me) {
      redirect(ctx, redirectPath);
      return {};
    }

    const { id, email } = me;

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps({ apolloClient, ...ctx }) : {}),
      me: { id, email },
    };
  };

  WithAuth.displayName = 'WithAuth(Page)';

  return WithAuth;
};
