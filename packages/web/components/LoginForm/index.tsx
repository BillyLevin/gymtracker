import { loginSchema } from '@gym-tracker/common';
import { Field, Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../graphql/user/mutation/login';
import { LoginMutation, LoginMutationVariables } from '../../lib/schema-types';
import { normalizeErrors } from '../../utils/normalizeErrors';
import Button from '../Button';
import InputGroup from '../InputGroup';
import './LoginForm.scss';

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
          }
          // } else {
          //   // Router.push('/error', '/dashboard');
          // }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="login-form">
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
