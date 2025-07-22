import { Service } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ServicePrisma {
  constructor(private readonly prisma: PrismaService) {}

  async searchAll(): Promise<Service[]> {
    const services = await this.prisma.service.findMany();

    return services.map((s) => ({
      ...s,
      price: Number(s.price ?? 0), // ✅ conversão de Decimal para number
    }));
  }
}
