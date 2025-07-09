import { RepositoryService, Service } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ServicePrisma implements RepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  searchAll(): Promise<Service[]> {
    return this.prisma.service.findMany();
  }
}
