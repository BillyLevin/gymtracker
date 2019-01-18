import React from 'react';
import { Mutation } from 'react-apollo';
import {
  CreateRoutine,
  CreateRoutineVariables,
  GetExercises_getExercises_exercises,
} from '../../lib/schema-types';
import { Formik, Field } from 'formik';
import { CREATE_ROUTINE_MUTATION } from '../../graphql/routine/mutation/createRoutineMutation';
import InputGroup from '../InputGroup';
import Button from '../Button';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Router from 'next/router';
import { routineSchema } from '@gym-tracker/common';

interface Exercise extends GetExercises_getExercises_exercises {
  __typename: string;
}

interface FormValues {
  name: string;
  day: string;
  exercises: { label: string; value: string; exercise: Exercise }[];
}

interface Props {
  exercises: Exercise[];
}

const dayOptions = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' },
];

const getExerciseOptions = (exercises: Exercise[]) =>
  exercises.map(exercise => {
    return { label: exercise.name, value: exercise.id, exercise };
  });

const RoutineForm: React.SFC<Props> = ({ exercises }) => (
  <Mutation<CreateRoutine, CreateRoutineVariables> mutation={CREATE_ROUTINE_MUTATION}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ name: '', day: 'Monday', exercises: [] }}
        validationSchema={routineSchema}
        onSubmit={async (input, { setSubmitting, setErrors }) => {
          const { name, day, exercises } = input;
          const exercisesInput = exercises.map(obj => {
            const { __typename, ...rest } = obj.exercise;
            return rest;
          });
          const response = await mutate({
            variables: { input: { name, day, exercises: exercisesInput } },
          });
          if (
            response &&
            response.data &&
            response.data.createRoutine.errors &&
            response.data.createRoutine.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.createRoutine.errors));
          } else {
            Router.push('/routines');
          }
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" placeholder="Routine name" label="Name" component={InputGroup} />
            <Field
              name="day"
              placeholder="Day"
              label="Day"
              component={InputGroup}
              options={dayOptions}
              inputType="select"
              defaultValue={{ label: 'Monday', value: 'monday' }}
            />
            <Field
              name="exercises"
              label="Exercises (pick at least one)"
              component={InputGroup}
              options={getExerciseOptions(exercises)}
              inputType="multi-select"
              value={values.exercises}
            />
            <Button theme="primary" type="submit" disabled={isSubmitting}>
              Create Routine
            </Button>
          </form>
        )}
      </Formik>
    )}
  </Mutation>
);

export default RoutineForm;
