import { Query, Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../../entity/User';

import * as argon from 'argon2';
import { MyContext } from '../types/MyContext';
import { invalidLoginResponse } from './shared/invalidLoginResponse';
import { registerSchema } from '@gym-tracker/common';
import { formatYupError } from '../../utils/formatYupError';
import { RegisterResponse, UserInput, LoginResponse } from './shared/types';

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext) {
    const { userId } = ctx.req.session!;
    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (user) {
      return user;
    }

    return null;
  }

  @Mutation(() => RegisterResponse)
  async register(@Arg('data') input: UserInput) {
    try {
      await registerSchema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        errors: formatYupError(err),
      };
    }

    const { email, password } = input;

    const hashedPassword = await argon.hash(password);

    try {
      await User.create({
        email,
        password: hashedPassword,
      }).save();
    } catch (err) {
      const { detail } = err;
      if (detail.includes('already exists')) {
        return {
          errors: [
            {
              path: 'email',
              message: 'Email already in use',
            },
          ],
        };
      }
      return {
        errors: [
          {
            path: 'email',
            message: 'Something went wrong. Please try again',
          },
        ],
      };
    }
    return {
      errors: [],
    };
  }

  @Mutation(() => LoginResponse)
  async login(@Arg('data') input: UserInput, @Ctx() ctx: MyContext) {
    const { email, password } = input;
    const { req } = ctx;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return invalidLoginResponse;
    }

    const valid = await argon.verify(user.password, password);

    if (!valid) {
      return invalidLoginResponse;
    }

    req.session!.userId = user.id;

    return {
      user,
      errors: [],
    };
  }
}
