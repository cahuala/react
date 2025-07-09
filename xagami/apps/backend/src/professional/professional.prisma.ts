import { Profissional, RepositoryProfessional } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProfessionalPrisma implements RepositoryProfessional {
  constructor(private readonly prisma: PrismaService) {}

  searchAll(): Promise<Profissional[]> {
    return this.prisma.professional.findMany();
  }
}
