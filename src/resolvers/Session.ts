export const spot = (parent: any, args: any, context: any) => {
  return context.prisma.session.findUnique({ where: { id: parent.id } }).spot();
};

export const focus = (parent: any, args: any, context: any) => {
  return context.prisma.session
    .findUnique({ where: { id: parent.id } })
    .focus();
};

export const user = (parent: any, args: any, context: any) => {
  return context.prisma.session.findUnique({ where: { id: parent.id } }).user();
};
