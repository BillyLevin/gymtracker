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

  @Field(() => String)
  day: string;
}

@ObjectType()
export class UpdateMealDaysResponse {
  @Field(() => [Error])
  errors: Error[];

  @Field(() => Meal, { nullable: true })
  meal?: Meal;
}

@ObjectType()
export class GetMealsResponse {
  @Field(() => [Meal])
  meals: Meal[];
}

@ObjectType()
export class RemoveMealFromDayResponse {
  @Field(() => [Error])
  errors: Error[];
}

@InputType()
export class UpdateMealInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];
}

@ObjectType()
export class UpdateMealResponse {
  @Field(() => [Error])
  errors: Error[];
}

@ObjectType()
export class GetMealByIdResponse {
  @Field(() => Meal, { nullable: true })
  meal?: Meal;

  @Field(() => [Error])
  errors: Error[];
}
