import { Ingredient } from '../types/Ingredient';

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
