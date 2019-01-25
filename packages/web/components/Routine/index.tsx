import Link from 'next/link';
import React from 'react';
import { Query } from 'react-apollo';
import { GET_EXERCISES_BY_ROUTINE } from '../../graphql/routine/query/getExercisesByRoutine';
import { GetExercisesByRoutine } from '../../lib/schema-types';
import './Routine.scss';

interface Props {
  name?: string;
  day: string;
  routineId?: string;
}

const Routine: React.FC<Props> = ({ name, day, routineId }) => (
  <Query<GetExercisesByRoutine>
    skip={!routineId}
    query={GET_EXERCISES_BY_ROUTINE}
    variables={{ routineId }}
  >
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getExercisesByRoutine && data.getExercisesByRoutine.exercises) {
        const { exercises } = data.getExercisesByRoutine;
        return (
          <div className="routine">
            <h2 className="routine-day">{day}</h2>
            <h3 className="routine-info">
              <div className="routine-detail">
                Routine: <span>{name || 'Rest Day'}</span>
              </div>
              <div className="routine-detail">
                Exercises: <span>{exercises.map(exercise => exercise.name).join(', ')}</span>
              </div>
              <Link href={`/routines/view/${routineId}`}>
                <a className="routine-link">View Full Routine</a>
              </Link>
            </h3>
          </div>
        );
      }

      return (
        <div className="routine">
          <h2 className="routine-day">{day}</h2>
          <h3 className="routine-info">
            <div className="routine-detail">
              Routine: <span>Rest Day</span>
            </div>
          </h3>
        </div>
      );
    }}
  </Query>
);

export default Routine;
