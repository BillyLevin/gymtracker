import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
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
  @Column({ type: 'int' })
  reps: number;

  @Field()
  @Column({ type: 'int' })
  sets: number;

  @Field()
  @Column('uuid')
  userId: string;

  @ManyToOne(() => User, user => user.exercises)
  user: User;
}
