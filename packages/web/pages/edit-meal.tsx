import React from 'react';
import CreateMealContainer from '../components/CreateMealContainer';
import DashboardLayout from '../components/DashboardLayout';
import { GET_MEAL_BY_ID_QUERY } from '../graphql/meal/query/getMealById';
import redirect from '../lib/redirect';
import { GetMealById, GetMealById_getMealById_meal as Meal } from '../lib/schema-types';
import { NextContextWithApollo } from '../types/NextContextWithApollo';

interface Props {
  meal?: Meal;
}

class EditMealPage extends React.Component<Props> {
  static async getInitialProps({ apolloClient, query, ...ctx }: NextContextWithApollo) {
    if (!query || (query && !query.id)) {
      redirect(ctx, '/meals');
      return {};
    }

    if (query) {
      const { id } = query;
      const response = await apolloClient.query<GetMealById>({
        query: GET_MEAL_BY_ID_QUERY,
        variables: { id },
      });

      if (
        response &&
        response.data &&
        response.data.getMealById &&
        response.data.getMealById.meal
      ) {
        const { meal } = response.data.getMealById;
        return { meal };
      } else {
        redirect(ctx, '/meals');
        return { meal: undefined };
      }
    }

    redirect(ctx, '/meals');
    return { meal: undefined };
  }
  render() {
    const { meal } = this.props;
    return (
      <DashboardLayout title="Edit Meal">
        <div className="form-page-container">
          <h1 className="main-heading">Update your meal</h1>
          <CreateMealContainer editMode={true} meal={meal || undefined} />
        </div>
      </DashboardLayout>
    );
  }
}

export default EditMealPage;
