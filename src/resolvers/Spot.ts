export const user = (parent: any, args: any, context: any) => {
  return context.prisma.spot.findUnique({ where: { id: parent.id } }).user();
};

export const sessions = (parent: any, args: any, context: any) => {
  return context.prisma.spot
    .findUnique({ where: { id: parent.id } })
    .sessions();
};
