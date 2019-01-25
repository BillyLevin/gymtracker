import { exerciseSchema } from '@gym-tracker/common';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Exercise } from '../../entity/Exercise';
import { formatYupError } from '../../utils/formatYupError';
import { MyContext } from '../types/MyContext';
import {
  CreateExerciseInput,
  CreateExerciseResponse,
  DeleteExerciseResponse,
  GetExercisesResponse,
  UpdateExerciseInput,
  UpdateExerciseResponse,
} from './shared/types';

@Resolver(Exercise)
export class ExerciseResolver {
  @Authorized()
  @Mutation(() => CreateExerciseResponse)
  async createExercise(@Arg('input') input: CreateExerciseInput, @Ctx() ctx: MyContext) {
    const { req } = ctx;

    try {
      await exerciseSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    const { name, sets, reps } = input;

    const userId = req.session!.userId;

    let exercise = null;

    try {
      exercise = await Exercise.create({
        name,
        sets,
        reps,
        userId,
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
      exercise,
      errors: [],
    };
  }

  @Authorized()
  @Query(() => GetExercisesResponse)
  async getExercises(@Ctx() ctx: MyContext) {
    const { req } = ctx;

    const userId = req.session!.userId;

    const exercises = await Exercise.find({ where: { userId } });

    return {
      exercises: exercises || [],
    };
  }

  @Authorized()
  @Mutation(() => DeleteExerciseResponse)
  async deleteExercise(@Arg('id') id: string) {
    try {
      await Exercise.delete(id);
    } catch (_) {
      return {
        ok: false,
      };
    }

    return {
      ok: true,
    };
  }

  @Authorized()
  @Mutation(() => UpdateExerciseResponse)
  async updateExercise(@Arg('input') input: UpdateExerciseInput) {
    const { id, name, sets, reps } = input;

    try {
      await Exercise.update(id, { name, sets, reps });
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

    const exercise = await Exercise.findOne(id);

    return {
      exercise,
      errors: [],
    };
  }
}
