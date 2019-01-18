import React from 'react';
import { Query } from 'react-apollo';
import { GetRoutines } from '../../lib/schema-types';
import { GET_ROUTINES_QUERY } from '../../graphql/routine/query/getRoutines';

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
              {routines.map(({ id, name, day }) => (
                <React.Fragment key={id}>
                  <div>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>day: {day}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          );
        }
      }

      return null;
    }}
  </Query>
);

export default RoutineList;
