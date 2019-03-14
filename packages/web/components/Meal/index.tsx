import React from 'react';
import EditMealButton from './EditMealButton';
import './Meal.scss';
import RemoveMealButton from './RemoveMealButton';

interface Props {
  meal: Meal;
  day: string;
}

interface Meal {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
}

const Meal: React.FC<Props> = ({ meal: { id, name, totalCalories, totalProtein }, day }) => (
  <div className="meal">
    <div className="meal-info">
      <h3 className="subtitle">{name}:</h3>
      <span>{totalCalories} calories</span>
      <span>{totalProtein}g protein</span>
    </div>
    <div className="meal-icons">
      <EditMealButton id={id} />
      <RemoveMealButton id={id} day={day} />
    </div>
  </div>
);

export default Meal;
