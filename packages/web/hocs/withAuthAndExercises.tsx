import { NextContextWithApollo } from '../types/NextContextWithApollo';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { GetExercises } from '../lib/schema-types';
import { GET_EXERCISES_QUERY } from '../graphql/exercise/query/getExercises';

export const withAuthAndExercises = (Page: any) => {
  const WithAuthAndExercises = (props: any) => <Page {...props} />;

  WithAuthAndExercises.getInitialProps = async ({
    apolloClient,
    ...ctx
  }: NextContextWithApollo) => {
    const { me } = await checkLoggedIn(apolloClient);

    if (!me) {
      redirect(ctx, '/login');
      return {};
    }

    const {
      data: {
        getExercises: { exercises },
      },
    } = await apolloClient.query<GetExercises>({ query: GET_EXERCISES_QUERY });

    const { id, email } = me;

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {}),
      me: { id, email },
      exercises,
    };
  };

  WithAuthAndExercises.displayName = 'WithAuthAndExercises(Page)';

  return WithAuthAndExercises;
};
