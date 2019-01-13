import { InputType, Field } from 'type-graphql';
import { Exercise } from '../../../entity/Exercise';

@InputType()
export class CreateRoutineInput {
  @Field()
  name: string;

  @Field()
  exercises: Exercise[];
}
