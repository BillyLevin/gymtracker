import React from 'react';
import { Query } from 'react-apollo';
import { GET_EXERCISES_BY_ROUTINE } from '../../graphql/routine/query/getExercisesByRoutine';
import {
  GetExercisesByRoutine,
  GetRoutineById_getRoutineById_routine,
} from '../../lib/schema-types';
import EditRoutineForm from '../EditRoutineForm';

interface Props {
  routine: GetRoutineById_getRoutineById_routine;
}

const EditRoutine: React.FC<Props> = ({ routine }) => {
  const { id } = routine;
  return (
    <Query<GetExercisesByRoutine> query={GET_EXERCISES_BY_ROUTINE} variables={{ routineId: id }}>
      {({ data, loading }) => {
        if (loading) {
          return null;
        }

        if (data && data.getExercisesByRoutine.exercises) {
          const { exercises } = data.getExercisesByRoutine;
          return (
            <div className="edit-routine">
              <h1 className="main-heading">Edit Routine</h1>
              <EditRoutineForm routine={routine} exercises={exercises} />
            </div>
          );
        }
      }}
    </Query>
  );
};

export default EditRoutine;
