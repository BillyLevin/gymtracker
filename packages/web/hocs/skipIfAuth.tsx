import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { NextContextWithApollo } from '../types/NextContextWithApollo';

export const skipIfAuth = (Page: any) => {
  const SkipIfAuth = (props: any) => <Page {...props} />;

  SkipIfAuth.getInitialProps = async ({ apolloClient, ...ctx }: NextContextWithApollo) => {
    const { me } = await checkLoggedIn(apolloClient);

    if (me) {
      redirect(ctx, '/dashboard');
      return {};
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps({ apolloClient, ...ctx }) : {}),
    };
  };

  SkipIfAuth.displayName = 'WithAuth(Page)';

  return SkipIfAuth;
};
