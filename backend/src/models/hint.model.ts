import prisma from '@/config/prismaClient';
import { Hint } from '@/types/hint.type';

const updateHint = async (hints: Array<Hint>) => {
  const updatedHints = await prisma.$transaction(
    hints.map((h) =>
      prisma.hint.update({
        where: {
          id: h.id,
        },
        data: {
          order: h.order,
          content: h.content,
          revealDate: h.revealDate,
        },
      }),
    ),
  );

  return updatedHints;
};

export { updateHint };
