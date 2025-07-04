import prisma from '@/config/prismaClient';

const getStudentById = async (id: number) => {
  return prisma.student.findUnique({
    where: {
      id,
    },
  });
};

const getAllStudents = async () => {
  return prisma.student.findMany({});
};

const getAllSeniors = async () => {
  return prisma.student.findMany({
    where: { isSenior: true },
  });
};

const getAllJuniors = async () => {
  return prisma.student.findMany({
    where: { isSenior: false },
  });
};

export { getStudentById, getAllStudents, getAllSeniors, getAllJuniors };
