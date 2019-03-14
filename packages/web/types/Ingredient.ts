export interface Ingredient {
  id: string;
  name: string;
  calories: number;
  protein: number;
  __typename?: string;
}

export interface IngredientWithoutId {
  name: string;
  calories: number;
  protein: number;
}
