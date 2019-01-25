import { Field, InputType, ObjectType } from 'type-graphql';
import { Exercise } from '../../../entity/Exercise';
import { Error } from '../../types/Error';

@InputType()
export class CreateExerciseInput {
  @Field()
  name: string;

  @Field()
  reps: number;

  @Field()
  sets: number;
}

@InputType()
export class UpdateExerciseInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  reps: number;

  @Field()
  sets: number;
}

@ObjectType()
export class CreateExerciseResponse {
  @Field(() => [Error])
  errors: Error[];

  @Field(() => Exercise, { nullable: true })
  exercise?: Exercise;
}

@ObjectType()
export class UpdateExerciseResponse {
  @Field(() => [Error])
  errors: Error[];

  @Field(() => Exercise, { nullable: true })
  exercise?: Exercise;
}

@ObjectType()
export class GetExercisesResponse {
  @Field(() => [Exercise])
  exercises: Exercise[];
}

@ObjectType()
export class DeleteExerciseResponse {
  @Field(() => Boolean)
  ok: boolean;
}
