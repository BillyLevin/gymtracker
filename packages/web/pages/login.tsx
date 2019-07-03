import Link from 'next/link';
import React from 'react';
import CustomHead from '../components/CustomHead';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import { skipIfAuth } from '../hocs/skipIfAuth';

const Login: React.FC = () => (
  <>
    <CustomHead title="Login" />
    <div className="login-page">
      <div className="login-content">
        <Logo />
        <LoginForm />
        <span className="or">OR</span>
        <Link href="/register">
          <a className="btn btn--secondary">Create An Account</a>
        </Link>
      </div>
    </div>
  </>
);

export default skipIfAuth(Login);
