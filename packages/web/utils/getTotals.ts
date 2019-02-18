import { Ingredient } from '../types/Ingredient';
import { Meal } from '../types/Meal';

export const getMealTotals = (
  ingredients: Ingredient[],
): { totalCalories: number; totalProtein: number } => {
  let totalCalories = 0;
  let totalProtein = 0;

  if (ingredients.length) {
    ingredients.forEach((ingredient: Ingredient) => {
      totalCalories += ingredient.calories;
      totalProtein += ingredient.protein;
    });
  }

  return {
    totalCalories,
    totalProtein,
  };
};

export const getDayTotals = (meals: Meal[]): { totalCalories: number; totalProtein: number } => {
  let totalCalories = 0;
  let totalProtein = 0;

  if (meals.length) {
    meals.forEach((meal: Meal) => {
      totalCalories += meal.totalCalories;
      totalProtein += meal.totalProtein;
    });
  }

  return {
    totalCalories,
    totalProtein,
  };
};
