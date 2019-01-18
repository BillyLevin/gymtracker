import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';
import RoutineList from '../components/RoutineList';

const Routines: React.FC = () => (
  <DashboardLayout title="Your Exercises">
    <div className="routines-container">
      <h1 className="main-heading">Your Routines</h1>
      <div className="routines-content">
        <RoutineList />
      </div>
    </div>
  </DashboardLayout>
);

export default withAuth(Routines);
