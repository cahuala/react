/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* es lint-disable @typescript-eslint/no-unsafe-assignment */
import {
  DeleteScheduling,
  NewScheduling,
  Scheduling,
  SearchForSchedulingForProfessionalForDate,
  SearchSchedulingToEmailClient,
  User,
} from '@xagami/core';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { userLogado } from 'src/shared/user.decorator';
import { SchedulingPrisma } from './scheduling.prisma';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly repo: SchedulingPrisma) {}
  @Post()
  async NewScheduling(@Body() date: Scheduling, @userLogado() user: User) {
    const scheduling: Scheduling = {
      ...date,
      data: new Date(date.data),
    };
    const caseOfUse = new NewScheduling(this.repo);
    await caseOfUse.execute({ scheduling, user });
  }
  @Get()
  async SearchSchedulingToEmail(@userLogado() user: User) {
    const caseOfUse = new SearchSchedulingToEmailClient(this.repo);
    const scheduling = await caseOfUse.execute(user);
    return scheduling;
  }
  @Get(':professional/:date')
  SearchForSchedulingForProfessionalForDate(
    @Param('professional') professionalId: string,
    @Param('date') date: string,
  ) {
    const caseOfUse = new SearchForSchedulingForProfessionalForDate(this.repo);
    return caseOfUse.execute({
      professionalId: +professionalId,
      date: new Date(date),
    });
  }
  @Delete(':id')
  async DeleteScheduling(@Param('id') id: string, @userLogado() user: User) {
    const caseOfUse = new DeleteScheduling(this.repo);
    await caseOfUse.execute({ id: +id, user });
  }
}
