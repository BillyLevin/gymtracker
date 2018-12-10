import { InputType, ObjectType, Field } from 'type-graphql';
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

@ObjectType({ description: 'response after creating an exercise' })
export class CreateExerciseResponse {
  @Field(() => [Error])
  errors: Error[];
}
