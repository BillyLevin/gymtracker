import React from 'react';
import { Mutation } from 'react-apollo';
import { FaTimes } from 'react-icons/fa';
import { REMOVE_MEAL_FROM_DAY_MUTATION } from '../../graphql/meal/mutation/removeMealFromDay';
import { GET_MEALS_BY_DAY } from '../../graphql/meal/query/getMealsByDay';
import { RemoveMealFromDay, RemoveMealFromDayVariables } from '../../lib/schema-types';
import { Meal } from '../../types/Meal';
import Button from '../Button';

interface Props {
  id: string;
  day: string;
}

const RemoveMealButton: React.FC<Props> = ({ id, day }) => (
  <Mutation<RemoveMealFromDay, RemoveMealFromDayVariables> mutation={REMOVE_MEAL_FROM_DAY_MUTATION}>
    {mutate => (
      <Button
        theme="delete"
        type="button"
        onClick={async () => {
          await mutate({
            variables: { input: { id, day } },
            optimisticResponse: {
              // @ts-ignore
              __typename: 'Mutation',
              errors: [],
            },
            update: cache => {
              const {
                getMealsByDay: { meals },
              }: any = cache.readQuery({ query: GET_MEALS_BY_DAY, variables: { day } });

              const filteredMeals = meals.filter((meal: Meal) => meal.id !== id);

              cache.writeQuery({
                query: GET_MEALS_BY_DAY,
                variables: { day },
                data: {
                  __typename: 'Query',
                  getMealsByDay: { __typename: 'Query', meals: filteredMeals },
                },
              });
            },
          });
        }}
      >
        <FaTimes />
      </Button>
    )}
  </Mutation>
);

export default RemoveMealButton;
