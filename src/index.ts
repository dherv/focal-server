import { ApolloServer } from 'apollo-server';
import { GraphQLArgs } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { resolvers } from './resolvers';
import { typeDefs } from './schema.graphql';
import { getUserId } from './utils';

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server is running on ${url}`)
  );
