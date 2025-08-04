/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { UserPartner, RepositoryUserPartner } from '@xagami/core';

@Injectable()
export class ClientePartnerPrisma implements RepositoryUserPartner {
  constructor(private readonly prisma: PrismaService) {}

  async save(cliente: UserPartner): Promise<string> {
    try {
      const { id, nomeCompleto, contacto, docIdentificacao } = cliente;

      const clienteParticular = await this.prisma.clienteParticular.upsert({
        where: { id: id ?? '' },
        create: {
          id,
          nomeCompleto,
          contacto: contacto ?? '',
          docIdentificacao: docIdentificacao ?? '',
        },
        update: {
          nomeCompleto,
          contacto: contacto ?? '',
          docIdentificacao: docIdentificacao ?? '',
        },
      });

      return clienteParticular.id;
    } catch (error) {
      console.error('Erro ao salvar Cliente Particular:', error);
      throw new Error('Erro ao salvar Cliente Particular');
    }
  }

  async delete(id: string): Promise<void> {
    await this.prisma.clienteParticular.delete({
      where: { id },
    });
  }

  async searchToEmail(email: string): Promise<UserPartner | null> {
    const cliente = await this.prisma.clienteParticular.findFirst({
      where: {
        user: { email },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!cliente) return null;

    return {
      id: cliente.id,
      nomeCompleto: cliente.nomeCompleto,
      contacto: cliente.contacto,
      docIdentificacao: cliente.docIdentificacao,
    };
  }

  async searchToId(id: string): Promise<UserPartner | null> {
    const cliente = await this.prisma.clienteParticular.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!cliente) return null;

    return {
      id: cliente.id,
      nomeCompleto: cliente.nomeCompleto,
      contacto: cliente.contacto,
      docIdentificacao: cliente.docIdentificacao,
    };
  }

  async searchToName(name: string): Promise<UserPartner[]> {
    const clientes = await this.prisma.clienteParticular.findMany({
      where: {
        nomeCompleto: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return clientes.map((c) => ({
      id: c.id,
      nomeCompleto: c.nomeCompleto,
      contacto: c.contacto,
      docIdentificacao: c.docIdentificacao,
      user: c.user,
    }));
  }
}
