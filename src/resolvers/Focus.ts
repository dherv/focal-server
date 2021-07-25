export const user = (parent: any, args: any, context: any) => {
  return context.prisma.focus.findUnique({ where: { id: parent.id } }).user();
};

export const sessions = (parent: any, args: any, context: any) => {
  return context.prisma.focus
    .findUnique({ where: { id: parent.id } })
    .sessions();
};
