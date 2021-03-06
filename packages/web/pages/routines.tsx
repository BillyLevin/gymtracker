import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import EditRoutine from '../components/EditRoutine';
import RoutineList from '../components/RoutineList';
import ViewRoutine from '../components/ViewRoutine';
import { GET_ROUTINE_BY_ID_QUERY } from '../graphql/routine/query/getRoutineById';
import { withAuth } from '../hocs/withAuth';
import redirect from '../lib/redirect';
import { GetRoutineById, GetRoutineById_getRoutineById_routine } from '../lib/schema-types';
import { NextContextWithApollo } from '../types/NextContextWithApollo';

interface Props {
  routine?: GetRoutineById_getRoutineById_routine;
  action: string;
}

const getPageTitle = (action: string): string => {
  if (action === 'view') return 'View Routine';
  if (action === 'edit') return 'Edit Routine';
  return 'Your Routines';
};

class Routines extends React.Component<Props> {
  static async getInitialProps({
    query: { action, id },
    apolloClient,
    ...ctx
  }: NextContextWithApollo) {
    let routine = null;

    if (action && id) {
      const response = await apolloClient.query<GetRoutineById>({
        query: GET_ROUTINE_BY_ID_QUERY,
        variables: { id },
      });

      if (response && response.data && response.data.getRoutineById.routine) {
        routine = response.data.getRoutineById.routine;
      }

      if (!routine) {
        redirect(ctx, '/routines');
        return { action: 'all', routine: undefined };
      }
    }

    return { action: action || 'all', routine: routine || undefined };
  }
  render() {
    const { action, routine } = this.props;
    return (
      <DashboardLayout title={getPageTitle(action)}>
        <div className="routines-container">
          {action === 'view' && routine && <ViewRoutine routine={routine} />}
          {action === 'edit' && routine && <EditRoutine routine={routine} />}
          {(action === 'all' || !routine) && (
            <React.Fragment>
              <h1 className="main-heading">Your Routines</h1>
              <div className="routines-content">
                <RoutineList />
              </div>
            </React.Fragment>
          )}
        </div>
      </DashboardLayout>
    );
  }
}

export default withAuth(Routines);
