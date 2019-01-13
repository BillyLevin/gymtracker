import React from 'react';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import Link from 'next/link';
import Button from '../components/Button';
import CustomHead from '../components/CustomHead';
import { NextContextWithApollo } from '../types/NextContextWithApollo';
import { ME_QUERY } from '../graphql/user/query/me';
import { Me } from '../lib/schema-types';
import redirect from '../lib/redirect';

class Login extends React.Component {
  static async getInitialProps({ apolloClient, ...ctx }: NextContextWithApollo) {
    const {
      data: { me },
    } = await apolloClient.query<Me>({ query: ME_QUERY });
    if (me) {
      redirect(ctx, '/dashboard');
    }

    return {};
  }
  render() {
    return (
      <CustomHead title="Login">
        <div className="login-page">
          <div className="login-content">
            <Logo />
            <LoginForm />
            <span className="or">OR</span>
            <Link href="/register">
              <Button theme="secondary">Create An Account</Button>
            </Link>
          </div>
        </div>
      </CustomHead>
    );
  }
}

export default Login;
