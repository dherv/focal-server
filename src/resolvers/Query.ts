export const sessions = async (parent: any, args: any, context: any) => {
  return context.prisma.session.findMany({
    where: { user: { id: context.userId } },
  });
};

export const focuses = async (parent: any, args: any, context: any) => {
  return context.prisma.focus.findMany({
    where: { user: { id: context.userId } },
  });
};

export const spots = async (parent: any, args: any, context: any) => {
  return context.prisma.spot.findMany({
    where: { user: { id: context.userId } },
  });
};

export const user = async (parent: any, args: any, context: any) => {
  const { userId } = context;
  return context.prisma.user.findUnique({ where: { id: Number(userId) } });
};
