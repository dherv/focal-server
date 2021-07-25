import bcrypt from 'bcryptjs';
import faker from 'faker';
import { GraphQLArgs, GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql';
import jwt from 'jsonwebtoken';
import { IFocus, ISession, ISpot } from '../types/interfaces';
import { APP_SECRET } from '../utils';

export const signup = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, avatar: faker.image.imageUrl(), password },
  });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
};

export const login = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });

  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

export const addFocus: GraphQLFieldResolver<IFocus, any, any> = async (
  parent,
  args,
  context,
  info
) => {
  const { userId } = context;
  return await context.prisma.focus.create({
    data: {
      name: args.name,
      completed: false,
      user: { connect: { id: userId } },
    },
  });
};

export const addSession: GraphQLFieldResolver<ISession, any, any> = async (
  parent,
  args,
  context,
  info
) => {
  const { userId } = context;
  console.log({ args });
  return await context.prisma.session.create({
    data: {
      memo: args.memo,
      rating: args.rating,
      focus: { connect: { id: Number(args.focusId) } },
      spot: { connect: { id: Number(args.spotId) } },
      user: { connect: { id: userId } },
    },
  });
};

export const addSpot: GraphQLFieldResolver<ISpot, any, any> = async (
  parent,
  args,
  context,
  info
) => {
  const { userId } = context;
  return await context.prisma.spot.create({
    data: {
      name: args.name,
      latitude: args.latitude,
      longitude: args.longitude,
      user: { connect: { id: userId } },
    },
  });
};
