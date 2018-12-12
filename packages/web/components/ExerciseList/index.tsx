import React from 'react';
import { Query } from 'react-apollo';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';
import { GetExercises } from '../../lib/schema-types';
import Exercise from '../Exercise';
import AddExerciseButton from '../AddExerciseButton';

const ExerciseList: React.FC = () => (
  <Query<GetExercises> query={GET_EXERCISES_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getExercises) {
        const { exercises } = data.getExercises;

        if (exercises) {
          return (
            <div className="exercises">
              {exercises.map(({ id, name, sets, reps }) => (
                <React.Fragment key={id}>
                  <Exercise name={name} sets={sets} reps={reps} id={id} />
                </React.Fragment>
              ))}
              <AddExerciseButton />
            </div>
          );
        }
      }

      return null;
    }}
  </Query>
);

export default ExerciseList;
