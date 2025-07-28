/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { TipoUtilizador } from '@prisma/client';
import { User, RepositoryUser } from '@xagami/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UserPrisma implements RepositoryUser {
  constructor(private readonly prisma: PrismaService) {}
  async save(user: User): Promise<string> {
    let userId: any;
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      userId = await this.prisma.user.update({
        where: { email: user.email },
        data: {
          name: user.name ?? existingUser.name,
          telefone: user.telefone ?? existingUser.telefone,
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
          tipo: (user.tipo ?? existingUser.tipo) as TipoUtilizador,
        },
      });
    } else {
      userId = await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password ?? '', // pode ser vazio para sociais
          telefone: user.telefone ?? '',
          tipo: (user.tipo ?? 'PARTICULAR') as TipoUtilizador,
        },
      });
    }
    return userId;
  }

  async searchToEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
