import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import Link from 'next/link';
import Button from '../components/Button';

export default () => (
  <Layout title="Login">
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
  </Layout>
);
