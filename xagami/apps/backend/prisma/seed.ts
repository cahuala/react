/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { profissionais, service, User } from '@xagami/core';
import { PrismaClient } from '@prisma/client';
//import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.professional.deleteMany();
  await prisma.professional.createMany({
    data: profissionais as any,
  });
  await prisma.service.createMany({
    data: service as any,
  });
  const user: User[] = [
    {
      name: 'Francisco Cahuala Monteiro',
      email: 'cahuala30@gmail.com',
      password: '$2b$10$2beD7U.E7Waxev94U194M.lKT6vTnoPV4Dgh7E9Dmp0dPIycWO72y',
      telefone: '(244) 934903730',
      barbeiro: true,
    },
    {
      name: 'Francisco Monteiro',
      email: 'cahuala31@gmail.com',
      password: '$2b$10$2beD7U.E7Waxev94U194M.lKT6vTnoPV4Dgh7E9Dmp0dPIycWO72y',
      telefone: '(244) 934903730',
      barbeiro: false,
    },
  ];
  await prisma.users.deleteMany();
  await prisma.users.createMany({ data: user as any });
}
seed();
