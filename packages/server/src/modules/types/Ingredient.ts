import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Ingredient {
  @Field()
  name: string;

  @Field()
  calories: number;

  @Field()
  protein: number;
}
