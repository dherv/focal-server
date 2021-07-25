export const focuses = (parent: any, args: any, context: any) => {
  return context.prisma.user
    .findUnique({ where: { id: context.userId } })
    .focuses();
};

export const spots = (parent: any, args: any, context: any) => {
  return context.prisma.user
    .findUnique({ where: { id: context.userId } })
    .spots();
};

export const sessions = (parent: any, args: any, context: any) => {
  return context.prisma.user
    .findUnique({ where: { id: context.userId } })
    .sessions();
};
