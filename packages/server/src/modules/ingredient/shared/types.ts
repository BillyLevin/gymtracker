import { Field, InputType, ObjectType } from 'type-graphql';
import { Ingredient } from '../../../entity/Ingredient';
import { Error } from '../../types/Error';

@InputType()
export class CreateIngredientInput {
  @Field()
  name: string;

  @Field()
  calories: number;

  @Field()
  protein: number;
}

@ObjectType()
export class CreateIngredientResponse {
  @Field(() => Ingredient, { nullable: true })
  ingredient?: Ingredient;

  @Field(() => [Error])
  errors: Error[];
}
