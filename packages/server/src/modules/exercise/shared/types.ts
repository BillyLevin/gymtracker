import { InputType, ObjectType, Field } from 'type-graphql';
import { Error } from '../../types/Error';
import { Exercise } from '../../../entity/Exercise';

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
export class DeleteExercisesResponse {
  @Field(() => Boolean)
  ok: boolean;
}
