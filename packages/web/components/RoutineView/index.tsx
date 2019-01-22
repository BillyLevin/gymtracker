import React from 'react';
import { GetRoutineById_getRoutineById_routine } from '../../lib/schema-types';
import { Query } from 'react-apollo';
import { GET_EXERCISES_BY_ROUTINE } from '../../graphql/routine/query/getExercisesByRoutine';
import { GetExercisesByRoutine } from '../../lib/schema-types';

interface Props {
  routine: GetRoutineById_getRoutineById_routine;
}

const RoutineView: React.FC<Props> = ({ routine: { name, id } }) => (
  <Query<GetExercisesByRoutine> query={GET_EXERCISES_BY_ROUTINE} variables={{ routineId: id }}>
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getExercisesByRoutine.exercises) {
        const { exercises } = data.getExercisesByRoutine;
        return (
          <div className="routine-view">
            <h1 className="main-heading">Viewing Routine: {name}</h1>
            <div className="routine-exercises">
              {exercises.map(exercise => (
                <div className="routine-exercise" key={exercise.id}>
                  {exercise.name}
                </div>
              ))}
            </div>
          </div>
        );
      }
    }}
  </Query>
);

export default RoutineView;
