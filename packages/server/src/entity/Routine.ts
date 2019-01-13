import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  Column,
  ManyToOne,
} from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { Exercise } from './Exercise';
import { User } from './User';

@Entity()
@ObjectType()
export class Routine extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column('uuid')
  userId: string;

  @ManyToMany(() => Exercise)
  @JoinTable({ name: 'routines_exercises' })
  exercises: Exercise[];

  @ManyToOne(() => User, user => user.routines)
  user: User;
}
