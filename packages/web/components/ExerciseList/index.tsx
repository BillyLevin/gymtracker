import React from 'react';
import { Query } from 'react-apollo';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';
import { GetExercises } from '../../lib/schema-types';
import AddExerciseButton from '../AddExerciseButton';
import Exercise from '../Exercise';
import Spinner from '../Spinner';

const ExerciseList: React.FC = () => (
  <Query<GetExercises> query={GET_EXERCISES_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <Spinner />;
      }

      if (data && data.getExercises) {
        const { exercises } = data.getExercises;

        if (exercises) {
          return (
            <div className="exercises">
              <AddExerciseButton />
              {exercises.map(({ id, name, sets, reps }) => (
                <React.Fragment key={id}>
                  <Exercise name={name} sets={sets} reps={reps} id={id} />
                </React.Fragment>
              ))}
            </div>
          );
        }
      }

      return null;
    }}
  </Query>
);

export default ExerciseList;
