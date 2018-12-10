import { Error } from '../../types/Error';
import { InputType, ObjectType, Field } from 'type-graphql';
import { User } from '../../../entity/User';

@InputType()
export class UserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType({ description: 'response after we register' })
export class RegisterResponse {
  @Field(() => [Error])
  errors: Error[];
}

@ObjectType({ description: 'response after we login' })
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [Error])
  errors: Error[];
}
