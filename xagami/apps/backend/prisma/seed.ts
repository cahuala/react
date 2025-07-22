/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { hotels, service, User } from '@xagami/core';
import { PrismaClient, TipoUtilizador } from '@prisma/client';
//import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.hotel.deleteMany();
  await prisma.hotel.createMany({
    data: hotels as any,
  });
  await prisma.service.createMany({
    data: service as any,
  });
  const user: User[] = [
    {
      id: '7b5d3f98-06b5-43b7-958d-ee7fe64cec0d',
      name: 'Francisco Cahuala Monteiro',
      email: 'cahuala30@gmail.com',
      password: '$2b$10$2beD7U.E7Waxev94U194M.lKT6vTnoPV4Dgh7E9Dmp0dPIycWO72y',
      telefone: '(244) 934903730',
      tipo: TipoUtilizador.PARTICULAR,
    },
    {
      id: 'b0f633cf-480b-41dc-bbe4-6a3469a1ec2a',
      name: 'Francisco Monteiro',
      email: 'cahuala31@gmail.com',
      password: '$2b$10$2beD7U.E7Waxev94U194M.lKT6vTnoPV4Dgh7E9Dmp0dPIycWO72y',
      telefone: '(244) 934903730',
      tipo: TipoUtilizador.EMPRESARIAL,
    },
  ];
  await prisma.user.deleteMany();
  await prisma.user.createMany({ data: user as any });
}
seed();
