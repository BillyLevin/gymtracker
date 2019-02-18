import React from 'react';
import { Query } from 'react-apollo';
import { GET_MEALS_BY_DAY } from '../../graphql/meal/query/getMealsByDay';
import { GetMealsByDay, GetMealsByDayVariables } from '../../lib/schema-types';
import AddMeal from '../AddMeal';
import Meal from '../Meal';
import './MealView.scss';

interface Props {
  day: string;
}

const MealView: React.FC<Props> = ({ day }) => (
  <div className="meal-view">
    <h2 className="subheading">{day}'s Meals</h2>
    <Query<GetMealsByDay, GetMealsByDayVariables> query={GET_MEALS_BY_DAY} variables={{ day }}>
      {({ data, loading }) => {
        if (loading) {
          return <span>loading...</span>;
        }
        if (data && data.getMealsByDay.meals && data.getMealsByDay.meals.length) {
          const { meals } = data.getMealsByDay;
          return (
            <>
              {meals.map(meal => {
                return <Meal meal={meal} key={meal.id} day={day} />;
              })}
            </>
          );
        }
        return <div className="no-meals">You currently have no meals scheduled for {day}s</div>;
      }}
    </Query>

    <AddMeal day={day} />
  </div>
);

export default MealView;
