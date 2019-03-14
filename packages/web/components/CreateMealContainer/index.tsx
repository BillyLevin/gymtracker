import React from 'react';
import { v4 } from 'uuid';
import { GetMealById_getMealById_meal as Meal } from '../../lib/schema-types';
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

interface Props {
  editMode: boolean;
  meal?: Meal;
}

const formatIngredients = (ingredients: Ingredient[]): Ingredient[] => {
  return ingredients.map(ingredient => {
    const { __typename, ...rest } = ingredient;
    return rest;
  });
};

class CreateMealContainer extends React.Component<Props, State> {
  static defaultProps = {
    editMode: false,
  };

  state: State = {
    ingredients: this.props.meal ? formatIngredients(this.props.meal.ingredients) : [],
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
    const { editMode, meal } = this.props;
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
          <MealForm
            ingredients={ingredients}
            editMode={editMode}
            mealId={meal ? meal.id : undefined}
          />
        </div>
      </div>
    );
  }
}

export default CreateMealContainer;
