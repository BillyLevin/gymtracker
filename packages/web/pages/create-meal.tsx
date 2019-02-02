import React from 'react';
import CreateMealContainer from '../components/CreateMealContainer';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';

const CreateMeal: React.FC = () => (
  <DashboardLayout title="Create Meal">
    <div className="form-page-container">
      <h1 className="main-heading">Add a new meal to your collection</h1>
      <CreateMealContainer />
    </div>
  </DashboardLayout>
);

export default withAuth(CreateMeal);
