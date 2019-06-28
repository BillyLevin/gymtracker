import { routineSchema } from '@gym-tracker/common';
import { Field, Formik } from 'formik';
import Router from 'next/router';
import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { GET_EXERCISES_QUERY } from '../../graphql/exercise/query/getExercises';
import { UPDATE_ROUTINE_MUTATION } from '../../graphql/routine/mutation/updateRoutine';
import { GetExercises, GetExercises_getExercises_exercises, GetRoutineById_getRoutineById_routine, UpdateRoutine, UpdateRoutineVariables } from '../../lib/schema-types';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Button from '../Button';
import InputGroup from '../InputGroup';

interface Exercise extends GetExercises_getExercises_exercises {
  __typename?: string;
}

interface Props {
  routine: GetRoutineById_getRoutineById_routine;
  exercises: Exercise[];
}

interface FormValues {
  name: string;
  day: string;
  exercises: { label: string; value: string; exercise: Exercise }[];
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


const EditRoutineForm: React.FC<Props> = ({ routine: { name, day, id }, exercises }) => (
  <Query<GetExercises> query={GET_EXERCISES_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getExercises.exercises) {
        const allExercises = data.getExercises.exercises;
        const defaultExercises = getExerciseOptions(exercises);
        return (
          <Mutation<UpdateRoutine, UpdateRoutineVariables> mutation={UPDATE_ROUTINE_MUTATION}>
            {mutate => (
              <Formik<FormValues>
                validationSchema={routineSchema}
                initialValues={{ name, day, exercises: defaultExercises }}
                onSubmit={async (input, { setSubmitting, setErrors }) => {
                  const exercisesInput = input.exercises.map(obj => {
                    const { __typename, ...rest } = obj.exercise;
                    return rest;
                  });

                  const newInput = {
                    id,
                    name: input.name,
                    day: input.day,
                    exercises: exercisesInput,
                  };

                  const response = await mutate({
                    variables: {
                      input: newInput,
                    },
                  });

                  if (
                    response &&
                    response.data &&
                    response.data.updateRoutine.errors &&
                    response.data.updateRoutine.errors.length
                  ) {
                    setSubmitting(false);
                    return setErrors(normalizeErrors(response.data.updateRoutine.errors));
                  } else {
                    Router.push(`/routines/view/${id}`);
                  }
                }}
              >
                {({ values, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="name"
                      placeholder="Routine name"
                      label="Name"
                      component={InputGroup}
                      defaultValue={name}
                    />
                    <Field
                      name="day"
                      placeholder="Day"
                      label="Day"
                      component={InputGroup}
                      options={dayOptions}
                      inputType="select"
                      defaultValue={{ label: day, value: day }}
                    />
                    <Field
                      name="exercises"
                      label="Exercises (pick at least one)"
                      component={InputGroup}
                      options={getExerciseOptions(allExercises)}
                      inputType="multi-select"
                      value={values.exercises}
                      defaultValue={defaultExercises}
                    />
                    <Button theme="primary" type="submit">
                      Save Changes
                    </Button>
                  </form>
                )}
              </Formik>
            )}
          </Mutation>
        );
      }
    }}
  </Query>
);

export default EditRoutineForm;
