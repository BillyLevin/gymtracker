import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { withAuth } from '../hocs/withAuth';
import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExerciseForm';

interface Props {
  me: {
    id: string;
    email: string;
  } | null;
}

class Exercises extends React.Component<Props> {
  render() {
    return (
      <DashboardLayout title="Create Exercise">
        <div className="exercises-container">
          <h1 className="main-heading">Your Exercises</h1>
          <ExerciseForm me={this.props.me} />
          <ExerciseList />
        </div>
      </DashboardLayout>
    );
  }
}

export default withAuth(Exercises);
