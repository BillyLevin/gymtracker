import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('IngredientInput')
export class Ingredient {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  calories: number;

  @Field()
  protein: number;
}
