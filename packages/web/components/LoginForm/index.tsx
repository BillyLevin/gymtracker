import { Mutation } from 'react-apollo';
import { Formik, Field } from 'formik';
import { LoginMutation, LoginMutationVariables } from '../../lib/schema-types';
import { InputGroup } from '../InputGroup';
import Button from '../Button';
import { loginSchema } from '@gym-tracker/common';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Router from 'next/router';
import { LOGIN_MUTATION } from '../../graphql/user/mutation/login';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => (
  <Mutation<LoginMutation, LoginMutationVariables> mutation={LOGIN_MUTATION}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (input, { setSubmitting, setErrors }) => {
          const response = await mutate({
            variables: { data: input },
          });
          if (
            response &&
            response.data &&
            response.data.login.errors &&
            response.data.login.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.login.errors));
          } else {
            Router.push('/');
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
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
            <Button disabled={isSubmitting} type="submit" theme="primary">
              Login
            </Button>
          </form>
        )}
      </Formik>
    )}
  </Mutation>
);

export default LoginForm;
