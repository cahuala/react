/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RepositoryRequest, Request } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EntregasPrisma implements RepositoryRequest {
  constructor(private readonly prisma: PrismaService) {}
  async save(order: Request): Promise<string> {
    try {
      const entrega: any = await this.prisma.solicitacao.upsert({
        where: { id: order.id ?? '' },
        create: {
          origem: order.origem,
          destino: order.destino,
          tipoServico: order.tipoServico as any,
          descricao: order.descricao,
          estado: order.estado as any,
          user: { connect: { id: order.user.id } },
        },
        select: {
          id: true,
        },
        update: {
          origem: order.origem,
          destino: order.destino,
          tipoServico: order.tipoServico as any,
          descricao: order.descricao,
          estado: order.estado as any,
          user: { connect: { id: order.user.id } },
        },
      });
      return entrega;
    } catch (error: any) {
      console.log(error);
      throw new Error('Method not implemented.', error);
    }
  }
  async searchToEmail(email: string): Promise<Request[]> {
    const order = await this.prisma.solicitacao.findMany({
      where: {
        user: {
          email: {
            contains: email, // LIKE '%email%'
            mode: 'insensitive', // opcional
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return order.map((s) => ({
      id: s.id,
      data: s.dataSolicitacao,
      origem: s.origem,
      destino: s.destino,
      descricao: s.descricao,
      estado: s.estado,
      tipoServico: s.tipoServico,
      user: {
        id: s.user.id,
        name: s.user.name,
        email: s.user.email,
      },
    }));
  }
  async searchToName(name: string): Promise<Request[]> {
    const order = await this.prisma.solicitacao.findMany({
      where: {
        user: {
          name: {
            contains: name ?? '', // LIKE '%email%'
            mode: 'insensitive', // opcional
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return order.map((s) => ({
      id: s.id,
      data: s.dataSolicitacao,
      origem: s.origem,
      destino: s.destino,
      descricao: s.descricao,
      estado: s.estado,
      tipoServico: s.tipoServico,
      user: {
        id: s.user.id,
        name: s.user.name,
        email: s.user.email,
      },
    }));
  }
  searchToId(id: string): Promise<Request | null> {
    return this.prisma.solicitacao.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });
  }
  searchToUserANDData(userId: string, data: Date): Promise<Request[]> {
    const year = data.getFullYear();
    const month = data.getUTCMonth();
    const day = data.getUTCDate();
    const startData = new Date(year, month, day, 0, 0, 0);
    const endData = new Date(year, month, day, 23, 59, 59);

    return this.prisma.solicitacao.findMany({
      where: {
        user: { id: userId },
        dataSolicitacao: { gte: startData, lte: endData },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });
  }
  searchQtdeRequest(userId: string): Promise<number | 0> {
    return this.prisma.solicitacao.count({
      where: {
        userId: userId,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.solicitacao.delete({
      where: { id },
    });
  }
}
