import Button from '../Button';
import DeleteExerciseButton from './DeleteExerciseButton';

interface Props {
  name: string;
  reps: number;
  sets: number;
  id: string;
  toggleEditState: () => void;
}

const ViewExercise: React.FC<Props> = ({ name, sets, reps, id, toggleEditState }) => (
  <div className="exercise">
    <div className="exercise-main">
      <h3>{name}</h3>
      <div className="exercise-details">
        <div className="exercise-detail">
          <span>{sets}</span> Sets
        </div>
        <div className="exercise-detail">
          <span>{reps}</span> Reps
        </div>
      </div>
    </div>
    <div className="exercise-footer">
      <Button theme="primary" type="button" onClick={toggleEditState}>
        Edit
      </Button>
      <DeleteExerciseButton id={id} />
    </div>
  </div>
);

export default ViewExercise;
