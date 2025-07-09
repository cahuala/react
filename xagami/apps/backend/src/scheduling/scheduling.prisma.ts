/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RepositoryScheduling, Scheduling } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class SchedulingPrisma implements RepositoryScheduling {
  constructor(private readonly prisma: PrismaService) {}
  async save(scheduling: Scheduling): Promise<void> {
    try {
      await this.prisma.scheduling.upsert({
        where: { id: scheduling.id ?? -1 },
        create: {
          data: scheduling.data,
          user: { connect: { id: scheduling.user.id } },
          professional: { connect: { id: scheduling.professional.id } },
          services: {
            connect: scheduling.services.map((serv) => ({ id: serv.id })),
          },
        },
        update: {
          data: scheduling.data,
          user: { connect: { id: scheduling.user.id } },
          professional: { connect: { id: scheduling.professional.id } },
          services: {
            connect: scheduling.services.map((serv) => ({ id: serv.id })),
          } as any,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async searchToEmail(email: string): Promise<Scheduling[]> {
    const scheduling = await this.prisma.scheduling.findMany({
      where: {
        user: {
          email,
        },
        data: { gte: new Date() },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        professional: { select: { id: true, name: true } },
        services: { select: { id: true, name: true, price: true } },
      },
      orderBy: {
        data: 'desc',
      },
    });
    return scheduling.map((s) => ({
      id: s.id,
      data: s.data,
      user: {
        id: s.user.id,
        name: s.user.name,
        email: s.user.email,
      },
      professional: {
        id: s.professional.id,
        name: s.professional.name,
      },
      services: s.services.map((serv) => ({
        id: serv.id,
        name: serv.name,
        price: serv.price,
      })),
    }));
  }
  searchToId(id: number): Promise<Scheduling | null> {
    return this.prisma.scheduling.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        professional: { select: { id: true, name: true } },
        services: { select: { id: true, name: true, price: true } },
      },
    });
  }
  searchToProfessionalANDData(
    professionalId: number,
    data: Date,
  ): Promise<Scheduling[]> {
    const year = data.getFullYear();
    const month = data.getUTCMonth();
    const day = data.getUTCDate();
    const startData = new Date(year, month, day, 0, 0, 0);
    const endData = new Date(year, month, day, 23, 59, 59);

    return this.prisma.scheduling.findMany({
      where: {
        professional: { id: professionalId },
        data: { gte: startData, lte: endData },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        professional: { select: { id: true, name: true } },
        services: { select: { id: true, name: true, price: true } },
      },
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.scheduling.delete({
      where: { id },
      include: { services: true },
    });
  }
}
