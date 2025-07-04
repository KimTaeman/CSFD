// import { prisma } from "@/app";
//
// beforeAll(async () => {
//     await prisma.$connect();
//     console.log("before all")
//
//     await prisma.student.create({
//       data: [
//         {
//           displayName: "Jane Doe",
//           nickname: "Janie",
//           house: "Alpha",
//           nationality: "Thai",
//           studentId: "67130500899",
//           profilePic: "url",
//           instagram: "jane",
//           discord: "jane",
//           line: "jane",
//         }
//       ]
//     })
// })
//
//
// afterAll(async () => {
//     await prisma.$disconnect();
// })
