import React from 'react';
import { FaListUl } from 'react-icons/fa';
import DashboardLayout from '../components/DashboardLayout';
import RoutineForm from '../components/RoutineForm';
import { withAuthAndExercises } from '../hocs/withAuthAndExercises';
import { GetExercises_getExercises_exercises } from '../lib/schema-types';

interface Exercise extends GetExercises_getExercises_exercises {
  __typename: string;
}

interface Props {
  exercises: Exercise[];
}

const CreateRoutine: React.FC<Props> = ({ exercises }) => (
  <DashboardLayout title="Create Routine">
    <div className="form-page-container">
      <h1 className="main-heading">Create a new exercise routine</h1>
      <FaListUl className="main-svg" />
      <RoutineForm exercises={exercises} />
    </div>
  </DashboardLayout>
);

export default withAuthAndExercises(CreateRoutine);
