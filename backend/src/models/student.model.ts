import prisma from '@/config/prismaClient';
import { UpdateStudent } from '@/types/student.type';
import { resourceUsage } from 'process';

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

export { getStudentById, getAllStudents, getAllSeniors, getAllJuniors, updateStudentById };
