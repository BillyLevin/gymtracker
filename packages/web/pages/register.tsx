import CustomHead from '../components/CustomHead';
import Logo from '../components/Logo';
import RegisterForm from '../components/RegisterForm';

export default () => (
  <>
    <CustomHead title="Register" />
    <div className="register-page">
      <div className="register-content">
        <Logo />
        <p className="subtitle">
          Welcome to GymTracker! Fill in the details below to create your free account
        </p>
        <RegisterForm />
      </div>
    </div>
  </>
);
