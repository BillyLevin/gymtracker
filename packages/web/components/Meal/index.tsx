import React from 'react';
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
    <h3 className="meal-name">{name}</h3>
    <span>{totalCalories} calories</span>
    <span>{totalProtein}g protein</span>
    <RemoveMealButton id={id} day={day} />
  </div>
);

export default Meal;
