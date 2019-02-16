import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import MealViewContainer from '../components/MealViewContainer';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { NextContextWithApollo } from '../types/NextContextWithApollo';
import { capitalizeString } from '../utils/capitalizeString';
import { getCurrentDay } from '../utils/getCurrentDay';

interface Props {
  day: string;
}

class Meals extends React.Component<Props> {
  static async getInitialProps({ apolloClient, ...ctx }: NextContextWithApollo) {
    const { me } = await checkLoggedIn(apolloClient);

    if (!me) {
      redirect(ctx, '/login');
      return {};
    }

    const day = getCurrentDay();

    const { id, email } = me;

    return {
      me: { id, email },
      day,
    };
  }
  render() {
    const { day } = this.props;
    return (
      <DashboardLayout title="Your Meals">
        <h1 className="main-heading">Your Meals</h1>
        <MealViewContainer defaultDay={capitalizeString(day)} />
      </DashboardLayout>
    );
  }
}

export default Meals;
