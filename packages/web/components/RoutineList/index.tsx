import React from 'react';
import { Query } from 'react-apollo';
import { GetRoutines, CreateRoutine_createRoutine_routine } from '../../lib/schema-types';
import { GET_ROUTINES_QUERY } from '../../graphql/routine/query/getRoutines';
import Routine from '../Routine';
import uuidv4 from 'uuid/v4';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const findRoutineWithDay = (
  routines: CreateRoutine_createRoutine_routine[],
  day: string,
): CreateRoutine_createRoutine_routine | null => {
  for (let i = 0; i < routines.length; i++) {
    if (routines[i].day === day) {
      return routines[i];
    }
  }

  return null;
};

const RoutineList: React.FC = () => (
  <Query<GetRoutines> query={GET_ROUTINES_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return null;
      }

      if (data && data.getRoutines) {
        const { routines } = data.getRoutines;

        if (routines) {
          return (
            <div className="routines">
              {days.map(day => {
                const routine = findRoutineWithDay(routines, day);
                return (
                  <React.Fragment key={routine ? routine.id : uuidv4()}>
                    <Routine
                      day={day}
                      name={routine ? routine.name : undefined}
                      routineId={routine ? routine.id : undefined}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          );
        }
      }

      return null;
    }}
  </Query>
);

export default RoutineList;
