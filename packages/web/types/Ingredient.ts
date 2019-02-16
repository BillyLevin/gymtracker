export interface Ingredient {
  id: string;
  name: string;
  calories: number;
  protein: number;
}

export interface IngredientWithoutId {
  name: string;
  calories: number;
  protein: number;
}
