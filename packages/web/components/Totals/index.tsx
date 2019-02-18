import React from 'react';
import './Totals.scss';

interface Props {
  totalCalories: number;
  totalProtein: number;
}

const Totals: React.FC<Props> = ({ totalCalories, totalProtein }) => (
  <div className="totals">
    <div className="total">
      <span>{totalCalories}</span>
      <span>Calories</span>
    </div>
    <div className="total">
      <span>{totalProtein}g</span>
      <span>Protein</span>
    </div>
  </div>
);

export default Totals;
