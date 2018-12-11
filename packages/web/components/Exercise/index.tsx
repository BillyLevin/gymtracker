import * as React from 'react';
import ViewExercise from './ViewExercise';
import EditExercise from './EditExercise';

import './Exercise.scss';

interface Props {
  name: string;
  reps: number;
  sets: number;
  id: string;
}

interface State {
  editMode: boolean;
}

class Exercise extends React.Component<Props, State> {
  state = {
    editMode: false,
  };

  toggleEditState = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  };
  render() {
    const { editMode } = this.state;
    if (!editMode) return <ViewExercise {...this.props} toggleEditState={this.toggleEditState} />;
    if (editMode) return <EditExercise {...this.props} toggleEditState={this.toggleEditState} />;
  }
}

export default Exercise;
