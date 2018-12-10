import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { ObjectType, ID, Field } from 'type-graphql';

@Entity('exercises')
@ObjectType()
export class Exercise extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  reps: number;

  @Field()
  @Column()
  sets: number;

  @ManyToOne(() => User, user => user.exercises)
  @JoinColumn({ name: 'userId' })
  user: User;
}
