import { Field, InputType, ObjectType } from 'type-graphql';
import { Exercise } from '../../../entity/Exercise';
import { Routine } from '../../../entity/Routine';
import { Error } from '../../types/Error';

@InputType()
export class CreateRoutineInput {
  @Field()
  name: string;

  @Field()
  day: string;

  @Field(() => [Exercise])
  exercises: Exercise[];
}

@ObjectType()
export class CreateRoutineResponse {
  @Field(() => [Error])
  errors: Error[];

  @Field(() => Routine, { nullable: true })
  routine?: Routine;
}

@ObjectType()
export class GetRoutinesResponse {
  @Field(() => [Routine])
  routines: Routine[];
}

@ObjectType()
export class GetExercisesByRoutineResponse {
  @Field(() => [Exercise], { nullable: true })
  exercises?: Exercise[];

  @Field(() => [Error])
  errors: Error[];
}

@ObjectType()
export class GetRoutineByIdResponse {
  @Field(() => Routine, { nullable: true })
  routine: Routine;

  @Field(() => [Error])
  errors: Error[];
}

@ObjectType()
export class UpdateRoutineResponse {
  @Field(() => [Error])
  errors: Error[];

  @Field(() => Exercise, { nullable: true })
  routine?: Routine;
}

@InputType()
export class UpdateRoutineInput extends CreateRoutineInput {
  @Field()
  id: string;
}
