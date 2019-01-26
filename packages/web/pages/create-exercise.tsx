import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import DashboardLayout from '../components/DashboardLayout';
import ExerciseForm from '../components/ExerciseForm';
import { withAuth } from '../hocs/withAuth';

const CreateExercise: React.FC = () => (
  <DashboardLayout title="Create Exercise">
    <div className="form-page-container">
      <h1 className="main-heading">Add a new exercise to your collection</h1>
      <FaDumbbell className="main-svg" />
      <ExerciseForm />
    </div>
  </DashboardLayout>
);

export default withAuth(CreateExercise);
