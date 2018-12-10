import React from 'react';
import { NextContextWithApollo } from '../types/NextContextWithApollo';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { GetExercises, GetExercises_getExercises_exercises } from '../lib/schema-types';
import { GET_EXERCISES_QUERY } from '../graphql/exercise/query/getExercises';

interface Props {
  exercises: GetExercises_getExercises_exercises[];
}

class CreateRoutine extends React.Component<Props> {
  static async getInitialProps({ apolloClient, ...ctx }: NextContextWithApollo) {
    const { me } = await checkLoggedIn(apolloClient);
    if (!me) {
      redirect(ctx, '/login');
      return {};
    }

    const {
      data: {
        getExercises: { exercises },
      },
    } = await apolloClient.query<GetExercises>({ query: GET_EXERCISES_QUERY });

    return {
      exercises,
    };
  }

  render() {
    const { exercises } = this.props;

    return (
      <div>
        <h1>hello</h1>
        {exercises.map(exercise => (
          <div key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CreateRoutine;
