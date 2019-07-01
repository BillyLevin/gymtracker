import { ApolloServer } from 'apollo-server-express';
import * as connectRedis from 'connect-redis';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createTypeormConnection } from './createTypeormConnection';
import { ExerciseResolver } from './modules/exercise/ExerciseResolver';
import { MealResolver } from './modules/meal/MealResolver';
import { RoutineResolver } from './modules/routine/RoutineResolver';
import { UserResolver } from './modules/user/UserResolver';
import { redis } from './redis';
require('dotenv-safe').config();

const SESSION_SECRET = process.env.SESSION_SECRET;

const RedisStore = connectRedis(session as any);

const startServer = async () => {
  try {
    await createTypeormConnection();
  } catch (e) {
    console.log(e);
  }

  const app = express();

  app.set('trust proxy', 1);

  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === 'production'
          ? 'https://www.gymtracker.xyz'
          : 'http://localhost:3000',
    }),
  );

  app.use((req, _, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
      try {
        const qid = authorization.split(' ')[1];
        req.headers.cookie = `qid=${qid}`;
      } catch (_) {}
    }

    return next();
  });

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: 'qid',
      secret: SESSION_SECRET || '',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 7,
      },
    }),
  );

  const schema = await buildSchema({
    resolvers: [UserResolver, ExerciseResolver, RoutineResolver, MealResolver],
    authChecker: ({ context }) => {
      return context.req.session && context.req.session.userId;
    },
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  server.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
};

startServer();
