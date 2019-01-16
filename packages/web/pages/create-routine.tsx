import React from 'react';
import { Me_me, GetExercises_getExercises_exercises } from '../lib/schema-types';
import DashboardLayout from '../components/DashboardLayout';
import { FaListUl } from 'react-icons/fa';
import RoutineForm from '../components/RoutineForm';
import { withAuthAndExercises } from '../hocs/withAuthAndExercises';

interface Props {
  me: Me_me;
  exercises: GetExercises_getExercises_exercises[];
}

const CreateRoutine: React.FC<Props> = ({ me, exercises }) => (
  <DashboardLayout title="Create Routine">
    <div className="create-routine-container">
      <h1 className="main-heading">Create a new exercise routine</h1>
      <FaListUl />
      <RoutineForm exercises={exercises} />
    </div>
  </DashboardLayout>
);

export default withAuthAndExercises(CreateRoutine);
