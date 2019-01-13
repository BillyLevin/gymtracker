import { NextContextWithApollo } from '../types/NextContextWithApollo';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

export const withAuthRedirectHome = (Page: any) => {
  const WithAuth = (props: any) => <Page {...props} />;

  WithAuth.getInitialProps = async ({ apolloClient, ...ctx }: NextContextWithApollo) => {
    const { me } = await checkLoggedIn(apolloClient);

    if (!me) {
      redirect(ctx, '/');
      return {};
    }

    const { id, email } = me;

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {}),
      me: { id, email },
    };
  };

  WithAuth.displayName = 'WithAuth(Page)';

  return WithAuth;
};
