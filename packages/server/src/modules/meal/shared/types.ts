import { Field, InputType, ObjectType } from 'type-graphql';
import { Meal } from '../../../entity/Meal';
import { Error } from '../../types/Error';
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

  @Field(() => [Error])
  errors: Error[];
}

@ObjectType()
export class GetMealsByDayResponse {
  @Field(() => [Meal])
  meals: Meal[];
}

@InputType()
export class UpdateMealDaysInput {
  @Field()
  id: string;

  @Field(() => [String])
  days: string[];
}

@ObjectType()
export class UpdateMealDaysResponse {
  @Field(() => [Error])
  errors: Error[];
}
