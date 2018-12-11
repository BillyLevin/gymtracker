import React from 'react';
import Button from '../Button';
import { Mutation } from 'react-apollo';
import { DeleteExercise, DeleteExerciseVariables } from '../../lib/schema-types';
import { DELETE_EXERCISE_MUTATION } from '../../graphql/exercise/mutation/deleteExercise';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';

interface Props {
  id: string;
}

const DeleteExerciseButton: React.FC<Props> = ({ id }) => (
  <Mutation<DeleteExercise, DeleteExerciseVariables> mutation={DELETE_EXERCISE_MUTATION}>
    {mutate => (
      <Button
        theme="secondary"
        type="button"
        onClick={async () =>
          await mutate({
            variables: { id },
            optimisticResponse: {
              deleteExercise: {
                // @ts-ignore
                __typename: 'Mutation',
                ok: true,
              },
            },
            update: cache => {
              const {
                getExercises: { exercises },
              }: any = cache.readQuery({ query: GET_EXERCISES_QUERY });
              cache.writeQuery({
                query: GET_EXERCISES_QUERY,
                data: {
                  getExercises: {
                    __typename: 'Query',
                    exercises: exercises.filter((exercise: any) => exercise.id !== id),
                  },
                },
              });
            },
          })
        }
      >
        Delete
      </Button>
    )}
  </Mutation>
);

export default DeleteExerciseButton;
