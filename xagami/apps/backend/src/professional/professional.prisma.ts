import { Hotel, RepositoryHotel } from '@xagami/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProfessionalPrisma implements RepositoryHotel {
  constructor(private readonly prisma: PrismaService) {}

  async searchAll(): Promise<Hotel[]> {
    const hotels = await this.prisma.hotel.findMany();

    return hotels.map((h) => ({
      ...h,
      avaliacao: Number(h.avaliacao),
      price: Number(h.price ?? 0),
    }));
  }
}
