import { ingredientSchema } from '@gym-tracker/common';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Ingredient } from '../../entity/Ingredient';
import { formatYupError } from '../../utils/formatYupError';
import { MyContext } from '../types/MyContext';
import { CreateIngredientInput, CreateIngredientResponse } from './shared/types';

@Resolver(Ingredient)
export class IngredientResolver {
  @Authorized()
  @Mutation(() => CreateIngredientResponse)
  async createIngredient(@Arg('input') input: CreateIngredientInput, @Ctx('ctx') ctx: MyContext) {
    const { req } = ctx;

    try {
      await ingredientSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    const userId = req.session!.userId;

    let ingredient = null;

    try {
      ingredient = await Ingredient.create({ ...input, userId }).save();
    } catch (_) {
      return {
        errors: [
          {
            path: 'ingredient',
            name: 'Something went wrong. Please try again',
          },
        ],
      };
    }

    return {
      ingredient,
      errors: [],
    };
  }
}
