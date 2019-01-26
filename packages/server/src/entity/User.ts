import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './Exercise';
import { Ingredient } from './Ingredient';
import { Routine } from './Routine';

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Exercise, exercise => exercise.user)
  exercises: Exercise[];

  @OneToMany(() => Routine, routine => routine.user)
  routines: Routine[];

  @OneToMany(() => Ingredient, ingredient => ingredient.user)
  ingredients: Ingredient[];
}
