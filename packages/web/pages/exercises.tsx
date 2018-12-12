import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';
import ExerciseList from '../components/ExerciseList';

const Exercises: React.FC = () => (
  <DashboardLayout title="Your Exercises">
    <div className="exercises-container">
      <h1 className="main-heading">Your Exercises</h1>
      <div className="exercises-content">
        <ExerciseList />
      </div>
    </div>
  </DashboardLayout>
);

export default withAuth(Exercises);
