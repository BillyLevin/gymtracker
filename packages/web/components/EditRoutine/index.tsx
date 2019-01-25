import React from 'react';
import { GetRoutineById_getRoutineById_routine } from '../../lib/schema-types';

interface Props {
  routine: GetRoutineById_getRoutineById_routine;
}

const EditRoutine: React.FC<Props> = () => <p>edit routine here</p>;

export default EditRoutine;
