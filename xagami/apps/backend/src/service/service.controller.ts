/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get } from '@nestjs/common';
import { ServicePrisma } from './service.prisma';
import { SearchService } from '@xagami/core';

@Controller('service')
export class ServiceController {
  constructor(private readonly prisma: ServicePrisma) {}
  @Get()
  searchServices() {
    const caseOfUse = new SearchService(this.prisma);
    return caseOfUse.execute();
  }
}
