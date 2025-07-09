/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { User, RepositoryUser } from '@xagami/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UserPrisma implements RepositoryUser {
  constructor(private readonly prisma: PrismaService) {}
  async save(user: User): Promise<void> {
    await this.prisma.users.upsert({
      where: { id: user.id ?? -1 },
      update: user,
      create: user as any,
    });
  }
  async searchToEmail(email: string): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }
}
