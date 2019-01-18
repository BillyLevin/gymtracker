import { Field, ObjectType, InputType } from 'type-graphql';
import { Error } from '../../types/Error';
import { Routine } from '../../../entity/Routine';
import { Exercise } from '../../../entity/Exercise';

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
