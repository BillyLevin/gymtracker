import { mealSchema } from '@gym-tracker/common';
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Resolver, Root } from 'type-graphql';
import { Meal } from '../../entity/Meal';
import { formatYupError } from '../../utils/formatYupError';
import { Ingredient } from '../types/Ingredient';
import { MyContext } from '../types/MyContext';
import { CreateMealInput, CreateMealResponse } from './shared/types';

@Resolver(Meal)
export class MealResolver {
  @FieldResolver()
  totalCalories(@Root() root: Meal) {
    const ingredients: Ingredient[] = root.ingredients;
    let total: number = 0;

    if (ingredients && ingredients.length) {
      ingredients.forEach((ingredient: Ingredient) => {
        total += ingredient.calories;
      });
    }

    return total;
  }

  @FieldResolver()
  totalProtein(@Root() root: Meal) {
    const ingredients: Ingredient[] = root.ingredients;
    let total: number = 0;

    if (ingredients && ingredients.length) {
      ingredients.forEach((ingredient: Ingredient) => {
        total += ingredient.protein;
      });
    }

    return total;
  }

  @Authorized()
  @Mutation(() => CreateMealResponse)
  async createMeal(@Arg('input') input: CreateMealInput, @Ctx() ctx: MyContext) {
    const { req } = ctx;
    try {
      await mealSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    let meal: Meal | null = null;

    const userId = req.session!.userId;

    try {
      meal = await Meal.create({ ...input, userId }).save();
    } catch (err) {
      console.log(err);
      return {
        errors: [
          {
            path: 'name',
            message: 'Something went wrong. Please try again',
          },
        ],
      };
    }

    return {
      meal,
      errors: [],
    };
  }
}
