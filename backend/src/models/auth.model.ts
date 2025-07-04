import prisma from '@/config/prismaClient';

export const findStudentByMicrosoftId = (microsoftId) => {
  return prisma.student.findUnique({
    where: { microsoftId },
  });
};

export const findStudentByEmail = (email) => {
  return prisma.student.findUnique({
    where: { email },
  });
};

export const updateStudentWithMicrosoftId = (email, microsoftId) => {
  return prisma.student.update({
    where: { email },
    data: { microsoftId },
  });
};

export const createNewStudent = (account) => {
  const defaultRole = 'CS26';
  return prisma.student.create({
    data: {
      microsoftId: account.homeAccountId,
      email: account.username,
      displayName: account.name,
      role: defaultRole,
      isSenior: defaultRole === 'CS25',
      nickname: null,
      studentId: null,
      lives: 3,
    },
  });
};

export const updateStudentProfile = (microsoftId, account) => {
  return prisma.student.update({
    where: { microsoftId },
    data: {
      displayName: account.name,
      email: account.username,
    },
  });
};

export const getStudentInfo = (userId) => {
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
            },
          },
        },
      },
      givenHints: {
        orderBy: {
          order: 'asc',
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
  });
};

export const completeRegistration = (userId, nickname, instagram, discord, line) => {
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
