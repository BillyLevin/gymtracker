import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';

const CreateIngredient: React.FC = () => (
  <DashboardLayout title="Create Ingredient">
    <div className="form-page-container">
      <h1 className="main-heading">Add a new ingredient to your collection</h1>
      <FaAppleAlt />
    </div>
  </DashboardLayout>
);

export default withAuth(CreateIngredient);
