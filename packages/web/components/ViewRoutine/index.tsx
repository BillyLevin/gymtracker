import React from 'react';
import { GetRoutineById_getRoutineById_routine } from '../../lib/schema-types';
import { Query } from 'react-apollo';
import { GET_EXERCISES_BY_ROUTINE } from '../../graphql/routine/query/getExercisesByRoutine';
import { GetExercisesByRoutine } from '../../lib/schema-types';
import './ViewRoutine.scss';
import { FaRunning, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import Link from 'next/link';

interface Props {
  routine: GetRoutineById_getRoutineById_routine;
}

const ViewRoutine: React.FC<Props> = ({ routine: { name, id } }) => (
  <Query<GetExercisesByRoutine> query={GET_EXERCISES_BY_ROUTINE} variables={{ routineId: id }}>
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getExercisesByRoutine.exercises) {
        const { exercises } = data.getExercisesByRoutine;
        return (
          <div className="routine-view">
            <h1 className="main-heading">Viewing Routine: {name}</h1>
            <h2 className="subtitle">
              Make sure you complete every exercise on the list - no slacking!
            </h2>
            <FaRunning className="routine-svg" />
            <table className="routine-exercises">
              <thead>
                <tr>
                  <th>Exercise Name</th>
                  <th>Number of reps</th>
                  <th>Number of sets</th>
                </tr>
                {exercises.map(({ id, name, reps, sets }) => (
                  <tr key={id} className="routine-exercise">
                    <td>{name}</td>
                    <td>{reps}</td>
                    <td>{sets}</td>
                  </tr>
                ))}
              </thead>
            </table>
            <div className="buttons-container">
              <Link href="/routines">
                <Button theme="secondary" type="button">
                  <span>
                    <FaArrowLeft />
                  </span>
                  View all routines
                </Button>
              </Link>
              <Link href={`/routines/edit/${id}`}>
                <Button theme="primary" type="button">
                  Edit this routine
                  <span>
                    <FaArrowRight />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        );
      }
    }}
  </Query>
);

export default ViewRoutine;
