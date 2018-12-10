import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { Exercise } from '../../entity/Exercise';
import { exerciseSchema } from '@gym-tracker/common';
import { formatYupError } from '../../utils/formatYupError';
import { User } from '../../entity/User';
import { CreateExerciseResponse, CreateExerciseInput } from './shared/types';
import { MyContext } from '../types/MyContext';
import { isAuthenticated } from '../../middleware';

@Resolver(Exercise)
export class ExerciseResolver {
  @Mutation(() => CreateExerciseResponse)
  async createExercise(@Arg('input') input: CreateExerciseInput, @Ctx() ctx: MyContext) {
    const { req } = ctx;

    if (!isAuthenticated(req)) {
      return {
        errors: [
          {
            path: 'name',
            message: 'Not authenticated',
          },
        ],
      };
    }

    try {
      await exerciseSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    const { name, sets, reps } = input;

    const userId = req.session!.userId;

    const user = await User.findOne(userId);

    try {
      await Exercise.create({
        name,
        sets,
        reps,
        user,
      }).save();
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
      errors: [],
    };
  }
}
