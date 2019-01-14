import { Resolver, Mutation, Arg, Ctx, Authorized } from 'type-graphql';
import { routineSchema } from '@gym-tracker/common';
import { formatYupError } from '../../utils/formatYupError';
import { CreateRoutineResponse, CreateRoutineInput } from './shared/types';
import { Routine } from '../../entity/Routine';
import { MyContext } from '../types/MyContext';

@Resolver(Routine)
export class RoutineResolver {
  @Authorized()
  @Mutation(() => CreateRoutineResponse)
  async createRoutine(@Arg('input') input: CreateRoutineInput, @Ctx() ctx: MyContext) {
    const { req } = ctx;
    try {
      await routineSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }
    const { name, exercises } = input;
    const userId = req.session!.userId;
    let routine = null;
    try {
      routine = await Routine.create({ name, exercises, userId }).save();
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
      routine,
      errors: [],
    };
  }
}
