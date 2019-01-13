import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Exercise } from './Exercise';
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
}
