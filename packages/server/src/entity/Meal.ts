import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from '../modules/types/Ingredient';
import { User } from './User';

@Entity()
@ObjectType()
export class Meal extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  totalCalories: number;

  @Field()
  @Column()
  totalProtein: number;

  @Field()
  @Column()
  ingredients: Ingredient[];

  @Field()
  @Column('uuid')
  userId: string;

  @ManyToOne(() => User, user => user.meals)
  user: User;
}
