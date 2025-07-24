import prisma from '@/config/prismaClient';

export const ping = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log(`[${new Date().toLocaleString()}] pong`);
  } catch (e) {
    console.error(`[${new Date().toLocaleString()}] Failed to ping:`, e);
  }
};
