import { Resolver, Mutation, Arg, Ctx, Authorized, Query } from 'type-graphql';
import { routineSchema } from '@gym-tracker/common';
import { formatYupError } from '../../utils/formatYupError';
import {
  CreateRoutineResponse,
  CreateRoutineInput,
  GetRoutinesResponse,
  GetExercisesByRoutineResponse,
  GetRoutineByIdResponse,
} from './shared/types';
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
    const { name, day, exercises } = input;

    const routineWithDayInput = await Routine.find({ where: { day } });

    if (routineWithDayInput) {
      await Routine.delete({ day });
    }

    const userId = req.session!.userId;
    let routine = null;
    try {
      routine = await Routine.create({ name, exercises, day, userId }).save();
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

  @Authorized()
  @Query(() => GetRoutinesResponse)
  async getRoutines(@Ctx() ctx: MyContext) {
    const { req } = ctx;

    const userId = req.session!.userId;

    const routines = await Routine.find({ where: { userId } });

    return {
      routines: routines || [],
    };
  }

  @Authorized()
  @Query(() => GetExercisesByRoutineResponse)
  async getExercisesByRoutine(@Arg('routineId') routineId: string) {
    let routine = null;
    let exercises = null;

    try {
      routine = await Routine.findOne({ where: { id: routineId }, relations: ['exercises'] });
    } catch (_) {
      return {
        errors: [{ path: 'routine', message: 'something went wrong with this routine' }],
      };
    }

    if (routine) {
      exercises = routine.exercises;
    }

    return {
      exercises,
      errors: [],
    };
  }

  @Authorized()
  @Query(() => GetRoutineByIdResponse)
  async getRoutineById(@Arg('id') id: string) {
    let routine = null;

    try {
      routine = await Routine.findOne(id);
    } catch (_) {
      return {
        errors: [{ path: 'routine', message: "couldn't find routine" }],
      };
    }

    return {
      routine,
      errors: [],
    };
  }
}
