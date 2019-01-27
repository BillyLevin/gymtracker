import { Field, InputType, ObjectType } from 'type-graphql';
import { Meal } from '../../../entity/Meal';
import { Ingredient } from '../../types/Ingredient';

@InputType()
export class CreateMealInput {
  @Field()
  name: string;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];
}

@ObjectType()
export class CreateMealResponse {
  @Field()
  name: string;

  @Field(() => Meal, { nullable: true })
  meal?: Meal;
}
