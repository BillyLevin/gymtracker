import { mealSchema } from '@gym-tracker/common';
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Meal } from '../../entity/Meal';
import { calculateSumInArr } from '../../utils/calculateSumInArr';
import { formatYupError } from '../../utils/formatYupError';
import { Ingredient } from '../types/Ingredient';
import { MyContext } from '../types/MyContext';
import { CreateMealInput, CreateMealResponse, GetMealsByDayResponse } from './shared/types';

@Resolver(Meal)
export class MealResolver {
  @FieldResolver()
  totalCalories(@Root() root: Meal) {
    const ingredients: Ingredient[] = root.ingredients;
    return calculateSumInArr(ingredients, 'calories');
  }

  @FieldResolver()
  totalProtein(@Root() root: Meal) {
    const ingredients: Ingredient[] = root.ingredients;
    return calculateSumInArr(ingredients, 'protein');
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
    } catch (_) {
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

  @Authorized()
  @Query(() => GetMealsByDayResponse)
  async getMealsByDay(@Arg('day') day: string, @Ctx() ctx: MyContext) {
    const { req } = ctx;
    const userId = req.session!.userId;

    const allMeals = await Meal.find({ where: { userId } });

    if (!allMeals) {
      return {
        meals: [],
      };
    }

    const meals: Meal[] = [];

    allMeals.forEach((meal: Meal) => {
      const { days } = meal;
      if (days) {
        if (days.some(val => val === day)) {
          meals.push(meal);
        }
      }
    });

    return { meals };
  }
}
