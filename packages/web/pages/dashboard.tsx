import DashboardLayout from '../components/DashboardLayout';
import DashboardHero from '../components/DashboardHero';
import DashboardOptions from '../components/DashboardOptions';

export default () => (
  <DashboardLayout title="Dashboard">
    <DashboardHero welcomeMessage="Welcome Back to GymTracker" />
    <DashboardOptions />
  </DashboardLayout>
);
