import { exerciseSchema } from '@gym-tracker/common';
import { Field, Formik } from 'formik';
import Router from 'next/router';
import React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_EXERCISE_MUTATION } from '../../graphql/exercise/mutation/createExercise';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';
import { CreateExercise, CreateExerciseVariables } from '../../lib/schema-types';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Button from '../Button';
import InputGroup from '../InputGroup';

interface FormValues {
  name: string;
  reps: number;
  sets: number;
}

class ExerciseForm extends React.Component {
  render() {
    return (
      <Mutation<CreateExercise, CreateExerciseVariables> mutation={CREATE_EXERCISE_MUTATION}>
        {mutate => (
          <Formik<FormValues>
            initialValues={{ name: '', reps: 0, sets: 0 }}
            validationSchema={exerciseSchema}
            onSubmit={async (input, { setSubmitting, setErrors }) => {
              const response = await mutate({
                variables: { input },
                optimisticResponse: {
                  createExercise: {
                    // @ts-ignore
                    __typename: 'Mutation',
                    errors: [],
                    exercise: { name: input.name, sets: input.sets, reps: input.reps },
                  },
                },
                update: cache => {
                  const {
                    getExercises: { exercises },
                  }: any = cache.readQuery({ query: GET_EXERCISES_QUERY });
                  exercises.push({ name: input.name, sets: input.sets, reps: input.reps });
                  cache.writeQuery({
                    query: GET_EXERCISES_QUERY,
                    data: {
                      getExercises: {
                        __typename: 'Query',
                        exercises,
                      },
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
                Router.push('/exercises');
              }
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit} className="form">
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
