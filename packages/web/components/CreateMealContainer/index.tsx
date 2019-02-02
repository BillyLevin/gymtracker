import React from 'react';
import { v4 } from 'uuid';
import { Ingredient } from '../../types/Ingredient';
import { getMealTotals } from '../../utils/getTotalCalories';
import IngredientForm from '../IngredientForm.tsx';
import MealForm from '../MealForm';
import './CreateMealContainer.scss';
import IngredientComponent from './IngredientComponent';

interface State {
  ingredients: Ingredient[];
}

class CreateMealContainer extends React.Component<{}, State> {
  state: State = {
    ingredients: [],
  };

  addIngredient = (ingredient: Ingredient) => {
    this.setState(prevState => {
      const { ingredients } = prevState;
      ingredient.id = v4();
      ingredients.push(ingredient);
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
          <MealForm ingredients={ingredients} />
        </div>
      </div>
    );
  }
}

export default CreateMealContainer;
