import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
@ObjectType()
export class Ingredient extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ type: 'int' })
  calories: number;

  @Field()
  @Column({ type: 'int' })
  protein: number;

  @Field()
  @Column('uuid')
  userId: string;

  @ManyToOne(() => User, user => user.ingredients)
  user: User;
}
