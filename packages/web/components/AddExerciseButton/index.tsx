import Link from 'next/link';
import { FaPlusCircle } from 'react-icons/fa';

import './AddExerciseButton.scss';

const AddExerciseButton: React.FC = () => (
  <Link href="/create-exercise">
    <a className="add-exercise-link">
      <FaPlusCircle className="add-exercise-icon" />
      <span>New exercise</span>
    </a>
  </Link>
);

export default AddExerciseButton;
