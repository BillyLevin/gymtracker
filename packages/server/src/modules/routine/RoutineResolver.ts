import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { routineSchema } from '@gym-tracker/common';
import { formatYupError } from '../../utils/formatYupError';
import { CreateRoutineInput } from './shared/types';
import { Routine } from '../../entity/Routine';
import { MyContext } from '../types/MyContext';

@Resolver(Routine)
export class ExerciseResolver {
  @Mutation()
  async createRoutine(@Arg('input') input: CreateRoutineInput, @Ctx() ctx: MyContext) {
    const { req } = ctx;
    try {
      await routineSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    const { name } = input;

    const userId = req.session!.userId;

    let routine = null;

    try {
      routine = await Routine.create({ name, userId }).save();
    } catch (_) {
      return {
        path: 'name',
        message: 'Something went wrong. Please try again',
      };
    }

    return {
      routine,
      errors: [],
    };
  }
}
