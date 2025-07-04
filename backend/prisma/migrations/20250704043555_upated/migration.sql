/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('CS25', 'CS26');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "microsoftId" TEXT,
    "email" TEXT NOT NULL,
    "studentId" TEXT,
    "displayName" TEXT NOT NULL,
    "nickname" TEXT,
    "profilePic" TEXT,
    "house" TEXT,
    "instagram" TEXT,
    "discord" TEXT,
    "line" TEXT,
    "nationality" TEXT,
    "role" "ROLE" NOT NULL DEFAULT 'CS26',
    "isSenior" BOOLEAN NOT NULL,
    "isHouseLeader" BOOLEAN DEFAULT false,
    "lives" INTEGER DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hint" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "revealDate" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "seniorId" INTEGER NOT NULL,
    "juniorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "seniorId" INTEGER NOT NULL,
    "juniorId" INTEGER NOT NULL,
    "isFound" BOOLEAN NOT NULL DEFAULT false,
    "foundAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_microsoftId_key" ON "Student"("microsoftId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_juniorId_key" ON "Mentor"("juniorId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_seniorId_juniorId_key" ON "Mentor"("seniorId", "juniorId");

-- AddForeignKey
ALTER TABLE "Hint" ADD CONSTRAINT "Hint_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hint" ADD CONSTRAINT "Hint_juniorId_fkey" FOREIGN KEY ("juniorId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_juniorId_fkey" FOREIGN KEY ("juniorId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
