import { prisma } from '@/app';

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
  return prisma.mentor.findMany({});
};

const getAllJniors = async () => {
  return prisma.student.findMany({ where: { isSenior: false } });
};

const updateHint = async () => {};

export { getStudentById, getAllStudents, getAllSeniors, getAllJniors };
