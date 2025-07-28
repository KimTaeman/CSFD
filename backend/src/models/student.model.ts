import prisma from '@/config/prismaClient';
import { UpdateStudent } from '@/types/student.type';

const getStudentById = async (id: number) => {
  return prisma.student.findUnique({
    where: {
      id,
    },
  });
};

const getAllStudents = async () => {
  return prisma.student.findMany({
    orderBy: [{ isHouseLeader: 'desc' }, { role: 'asc' }],
  });
};

const getAllSeniors = async () => {
  return prisma.student.findMany({
    where: { isSenior: true },
  });
};

const updateStudentById = async (id: number, data: UpdateStudent) => {
  return prisma.student.update({
    where: {
      id,
    },
    data: data,
  });
};

const getAllJuniors = async () => {
  return prisma.student.findMany({
    where: { isSenior: false },
  });
};

const guessMentor = async (id: number, guess: string) => {
  const junior = await prisma.student.findUnique({
    where: { id },
    include: {
      mentor: true,
    },
  });

  if (!junior || junior.lives === null || !junior.mentor || !junior.studentId) {
    return { isCorrect: false, message: 'Invalid player or game setup.' };
  }

  if (junior.lives <= 0) {
    return { isCorrect: false, message: 'You are out of lives!' };
  }

  const senior = await prisma.student.findUnique({
    where: {
      id: junior.mentor.seniorId,
    },
  });

  if (!senior || !senior.studentId) {
    return { isCorrect: false, message: 'Mentor data is missing.' };
  }

  if (senior.studentId.slice(-3) === guess) {
    await prisma.mentor.update({
      where: {
        juniorId: id,
      },
      data: {
        isFound: true,
        foundAt: new Date(),
      },
    });
    return { isCorrect: true };
  }

  await prisma.student.update({
    where: {
      id,
    },
    data: {
      lives: {
        decrement: 1,
      },
    },
  });

  return { isCorrect: false, message: 'Incorrect guess.' };
};

const guessCorrect = async (id: number) => {
  const result = await prisma.mentor.findUnique({
    where: { juniorId: id },
    select: { isFound: true, juniorId: true, seniorId: true },
  });

  if (!result) return null;

  if (result.isFound) {
    return result;
  }

  const randomSeniorId = Math.floor(Math.random() * 56) + 1;

  return {
    ...result,
    seniorId: randomSeniorId,
  };
};

export {
  getStudentById,
  getAllStudents,
  getAllSeniors,
  getAllJuniors,
  updateStudentById,
  guessMentor,
  guessCorrect,
};
