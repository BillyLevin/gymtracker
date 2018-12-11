import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as session from 'express-session';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './modules/user/UserResolver';
import { createTypeormConnection } from './createTypeormConnection';
import * as cors from 'cors';
import * as connectRedis from 'connect-redis';
import { redis } from './redis';
import { ExerciseResolver } from './modules/exercise/ExerciseResolver';

// TODO: Move to .env file
const SESSION_SECRET: string = 'fijfijfijfiiidddvgdyhnjiicdisjcfijdescofjo';

const RedisStore = connectRedis(session as any);

const startServer = async () => {
  await createTypeormConnection();

  const app = express();

  app.set('trust proxy', 1);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
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
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 365 * 7,
      },
    }),
  );

  const schema = await buildSchema({
    resolvers: [UserResolver, ExerciseResolver],
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
