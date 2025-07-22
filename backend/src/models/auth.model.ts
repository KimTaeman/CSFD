import { AccountInfo } from '@azure/msal-node';
import prisma from '@/config/prismaClient';
import { StudentInfo } from '@/types/auth.type';
import { ROLE } from '@/generated/prisma';

export const findStudentByMicrosoftId = (microsoftId: string) => {
  return prisma.student.findUnique({
    where: { microsoftId },
  });
};

export const findStudentByEmail = (email: string) => {
  return prisma.student.findUnique({
    where: { email },
  });
};

export const updateStudentWithMicrosoftId = (email: string, microsoftId: string) => {
  return prisma.student.update({
    where: { email },
    data: { microsoftId },
  });
};

export const createNewStudent = (account: AccountInfo) => {
  const defaultRole = ROLE.CS25 ?? ROLE.CS26;
  const isSenior = defaultRole === ROLE.CS25;

  return prisma.student.create({
    data: {
      microsoftId: account.homeAccountId,
      email: account.username,
      displayName: account.name || '',
      role: defaultRole,
      isSenior: isSenior,
      nickname: null,
      studentId: null,
      lives: isSenior ? null : 3,
    },
  });
};

export const updateStudentProfile = (microsoftId: string, account: AccountInfo) => {
  return prisma.student.update({
    where: { microsoftId },
    data: {
      displayName: account.name,
      email: account.username,
    },
  });
};

export const getStudentInfo = (userId: number): Promise<StudentInfo | null> => {
  const now = new Date();
  return prisma.student.findUnique({
    where: { id: userId },
    include: {
      mentees: {
        include: {
          junior: {
            select: {
              id: true,
              displayName: true,
              nickname: true,
              instagram: true,
              discord: true,
              line: true,
              nationality: true,
              studentId: true,
              lives: true,
            },
          },
        },
      },
      mentor: {
        include: {
          senior: {
            select: {
              id: true,
              displayName: true,
              nickname: true,
              instagram: true,
              discord: true,
              line: true,
              nationality: true,
              studentId: true,
            },
          },
        },
      },
      givenHints: {
        orderBy: {
          id: 'asc',
        },
      },
      receivedHints: {
        where: {
          revealDate: {
            lte: now,
          },
        },
        select: {
          id: true,
          order: true,
          content: true,
          revealDate: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
  }) as Promise<StudentInfo | null>;
};

export const completeRegistration = (
  userId: number,
  nickname: string,
  instagram?: string,
  discord?: string,
  line?: string,
) => {
  return prisma.student.update({
    where: { id: userId },
    data: {
      nickname: nickname,
      instagram: instagram || null,
      discord: discord || null,
      line: line || null,
    },
  });
};
