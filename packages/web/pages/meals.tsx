import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { NextContextWithApollo } from '../types/NextContextWithApollo';
import { getCurrentDay } from '../utils/getCurrentDay';

class Meals extends React.Component {
  static async getInitialProps({ apolloClient, query: { day }, ...ctx }: NextContextWithApollo) {
    const { me } = await checkLoggedIn(apolloClient);

    if (!me) {
      redirect(ctx, '/login');
      return {};
    }

    if (me && !day) {
      redirect(ctx, `/meals/${getCurrentDay()}`);
    }

    const { id, email } = me;

    return {
      me: { id, email },
      day,
    };
  }
  render() {
    return (
      <DashboardLayout title="Your Meals">
        <h1 className="main-heading">Your Meal Schedule</h1>
      </DashboardLayout>
    );
  }
}

export default Meals;
