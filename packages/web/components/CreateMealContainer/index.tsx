import React from 'react';
import { v4 } from 'uuid';
import { Ingredient, IngredientWithoutId } from '../../types/Ingredient';
import { getMealTotals } from '../../utils/getTotals';
import IngredientForm from '../IngredientForm';
import MealForm from '../MealForm';
import Totals from '../Totals';
import './CreateMealContainer.scss';
import IngredientComponent from './IngredientComponent';

interface State {
  ingredients: Ingredient[];
}

class CreateMealContainer extends React.Component<{}, State> {
  state: State = {
    ingredients: [],
  };

  addIngredient = (ingredient: IngredientWithoutId) => {
    this.setState(prevState => {
      const { ingredients } = prevState;
      const newIngredient = { ...ingredient, id: v4() };
      ingredients.push(newIngredient);
      return { ...prevState, ingredients };
    });
  };

  removeIngredient = (id: string) => {
    const { ingredients } = this.state;
    ingredients.forEach((ingredient: Ingredient, index: number) => {
      if (ingredient.id === id) {
        ingredients.splice(index, 1);
      }
    });
    this.setState({ ingredients });
  };

  render() {
    const { ingredients } = this.state;
    const { totalCalories, totalProtein } = getMealTotals(ingredients);
    return (
      <div className="create-meal-container">
        <IngredientForm addIngredient={this.addIngredient} />

        <table className="ingredients">
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Protein</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ingredients &&
              ingredients.map((ingredient: Ingredient) => (
                <IngredientComponent
                  ingredient={ingredient}
                  key={ingredient.id}
                  removeIngredient={this.removeIngredient}
                />
              ))}
          </tbody>
        </table>
        <div className="create-meal-footer">
          <Totals totalCalories={totalCalories} totalProtein={totalProtein} />
          <MealForm ingredients={ingredients} />
        </div>
      </div>
    );
  }
}

export default CreateMealContainer;
