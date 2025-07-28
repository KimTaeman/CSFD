import app from './app';
import config from './config/config';
import prisma from '@/config/prismaClient';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
