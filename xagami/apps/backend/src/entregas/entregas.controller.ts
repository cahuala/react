import { Body, Controller, Get, Post } from '@nestjs/common';
import { EntregasPrisma } from './entregas.prisma';
import { userLogado } from 'src/shared/user.decorator';
import { NewRequest, SearchRequestToEmail, Request, User } from '@xagami/core';

@Controller('entregas')
export class EntregasController {
  constructor(private readonly repo: EntregasPrisma) {}
  @Post()
  async NewEntrega(@Body() request: Request, @userLogado() user: User) {
    const caseOfUse = new NewRequest(this.repo);
    return await caseOfUse.execute({ request, user });
  }
  @Get()
  async SearchRequestToEmail(@userLogado() user: User) {
    const caseOfUse = new SearchRequestToEmail(this.repo);
    const requests = await caseOfUse.execute(user);
    return requests;
  }
}
