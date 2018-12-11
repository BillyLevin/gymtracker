import { Mutation } from 'react-apollo';
import { CREATE_EXERCISE_MUTATION } from '../../graphql/exercise/mutation/createExercise';
import { CreateExercise, CreateExerciseVariables, Me, Me_me } from '../../lib/schema-types';
import { Formik, Field } from 'formik';
import { exerciseSchema } from '@gym-tracker/common';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { InputGroup } from '../InputGroup';
import Button from '../Button';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';
import React from 'react';

interface FormValues {
  name: string;
  reps: number;
  sets: number;
}

interface Props {
  me: {
    id: string;
    email: string;
  } | null;
}

class ExerciseForm extends React.Component<Props> {
  render() {
    return (
      <Mutation<CreateExercise, CreateExerciseVariables> mutation={CREATE_EXERCISE_MUTATION}>
        {mutate => (
          <Formik<FormValues>
            initialValues={{ name: '', reps: 0, sets: 0 }}
            validationSchema={exerciseSchema}
            onSubmit={async (input, { setSubmitting, setErrors, resetForm }) => {
              const response = await mutate({
                variables: { input },
                optimisticResponse: {
                  createExercise: {
                    // @ts-ignore
                    __typename: 'Mutation',
                    exercise: {
                      __typename: 'Exercise',
                      id: new Date().getTime().toString(),
                      name: input.name,
                      sets: input.sets,
                      reps: input.reps,
                      userId: this.props.me!.id,
                    },
                    errors: [],
                  },
                },
                update: (cache, { data }) => {
                  const { getExercises }: any = cache.readQuery({ query: GET_EXERCISES_QUERY });
                  const { exercises } = getExercises;
                  const { exercise } = data!.createExercise;

                  cache.writeQuery({
                    query: GET_EXERCISES_QUERY,
                    data: {
                      getExercises: { __typename: 'Query', exercises: exercises.concat(exercise) },
                    },
                  });
                },
              });
              if (
                response &&
                response.data &&
                response.data.createExercise.errors &&
                response.data.createExercise.errors.length
              ) {
                setSubmitting(false);
                return setErrors(normalizeErrors(response.data.createExercise.errors));
              } else {
                resetForm();
              }
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  placeholder="Exercise name"
                  label="Name"
                  component={InputGroup}
                />
                <Field
                  name="sets"
                  placeholder="Number of sets"
                  label="Number of sets"
                  component={InputGroup}
                  type="number"
                />
                <Field
                  name="reps"
                  placeholder="Number of reps"
                  label="Number of reps"
                  component={InputGroup}
                  type="number"
                />
                <Button type="submit" theme="primary" disabled={isSubmitting}>
                  Create Exercise
                </Button>
              </form>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default ExerciseForm;
