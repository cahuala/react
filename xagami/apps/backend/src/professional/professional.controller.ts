/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get } from '@nestjs/common';
import { ProfessionalPrisma } from './professional.prisma';
import { SearchHotel } from '@xagami/core';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly repo: ProfessionalPrisma) {}
  @Get()
  searchProfessionals() {
    const caseOfUse = new SearchHotel(this.repo);
    return caseOfUse.execute();
  }
}
