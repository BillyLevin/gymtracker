import React from 'react';
import DashboardHero from '../components/DashboardHero';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';

const DashboardPage: React.FC = () => (
  <DashboardLayout title="Dashboard">
    <DashboardHero welcomeMessage="Welcome to GymTracker!" />
  </DashboardLayout>
);

export default withAuth(DashboardPage);
