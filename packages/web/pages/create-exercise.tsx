import React from 'react';
import ExerciseForm from '../components/ExerciseForm';
import { Me_me } from '../lib/schema-types';
import { withAuth } from '../hocs/withAuth';
import DashboardLayout from '../components/DashboardLayout';
import { FaDumbbell } from 'react-icons/fa';

interface Props {
  me: Me_me;
}

const CreateExercise: React.FC<Props> = ({ me }) => (
  <DashboardLayout title="Create Exercise">
    <div className="create-exercise-container">
      <h1 className="main-heading">Add a new exercise to your collection</h1>
      <FaDumbbell />
      <ExerciseForm me={me} />
    </div>
  </DashboardLayout>
);

export default withAuth(CreateExercise);
