import { Mutation } from 'react-apollo';
import { RegisterMutation, RegisterMutationVariables } from '../../lib/schema-types';
import { REGISTER_MUTATION } from '../../graphql/user/mutation/register';
import { Formik, Field } from 'formik';
import { registerSchema } from '@gym-tracker/common';
import InputGroup from '../InputGroup';
import Button from '../Button';
import Router from 'next/router';
import { normalizeErrors } from '../../utils/normalizeErrors';

interface FormValues {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => (
  <Mutation<RegisterMutation, RegisterMutationVariables> mutation={REGISTER_MUTATION}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={async (input, { setSubmitting, setErrors }) => {
          const response = await mutate({ variables: { data: input } });
          if (
            response &&
            response.data &&
            response.data.register.errors &&
            response.data.register.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.register.errors));
          } else {
            Router.push('/');
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form form--primary">
            <Field
              name="email"
              label="Email"
              placeholder="example@example.com"
              component={InputGroup}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Password"
              component={InputGroup}
              type="password"
            />
            <Button type="submit" theme="primary" disabled={isSubmitting}>
              Sign Up
            </Button>
          </form>
        )}
      </Formik>
    )}
  </Mutation>
);

export default RegisterForm;
