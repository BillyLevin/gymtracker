import Button from '../Button';
import { Mutation } from 'react-apollo';
import { UpdateExercise, UpdateExerciseVariables } from '../../lib/schema-types';
import { UPDATE_EXERCISE_MUTATION } from '../../graphql/exercise/mutation/updateExercise';
import { Formik, Field } from 'formik';
import { InputGroup } from '../InputGroup';
import { exerciseSchema } from '@gym-tracker/common';
import { normalizeErrors } from '../../utils/normalizeErrors';

interface Props {
  name: string;
  reps: number;
  sets: number;
  id: string;
  toggleEditState: () => void;
}

interface FormValues {
  name: string;
  reps: number;
  sets: number;
}

const EditExercise: React.FC<Props> = ({ name, sets, reps, id, toggleEditState }) => (
  <div className="edit-exercise">
    <Mutation<UpdateExercise, UpdateExerciseVariables> mutation={UPDATE_EXERCISE_MUTATION}>
      {mutate => (
        <Formik<FormValues>
          initialValues={{ name, sets, reps }}
          onSubmit={async (input, { setSubmitting, setErrors }) => {
            const response = await mutate({
              variables: {
                input: {
                  id,
                  ...input,
                },
              },
            });
            if (
              response &&
              response.data &&
              response.data.updateExercise.errors &&
              response.data.updateExercise.errors.length
            ) {
              setSubmitting(false);
              return setErrors(normalizeErrors(response.data.updateExercise.errors));
            } else {
              toggleEditState();
            }
          }}
          validationSchema={exerciseSchema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name" placeholder="Exercise name" label="Name" component={InputGroup} />
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
              <Button theme="primary" type="submit">
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  </div>
);

export default EditExercise;
