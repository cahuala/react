/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeleteUserPartner, NewUserPartner, User } from '@xagami/core';

import {
  SearchUserPartnerToEmail,
  SearchToId,
  SearchUserPartnerName,
} from '@xagami/core';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { userLogado } from 'src/shared/user.decorator';
import { ClientePartnerPrisma } from './user-partner.prisma';

@Controller('userpartner')
export class UserPartnerController {
  constructor(private readonly repo: ClientePartnerPrisma) {}

  @Post()
  async createUserPartner(@Body() partner: any) {
    const useCase = new NewUserPartner(this.repo);
    return useCase.execute(partner);
  }

  @Delete(':id')
  async deleteUserPartner(@Param('id') id: string, @userLogado() user: User) {
    const useCase = new DeleteUserPartner(this.repo);
    return useCase.execute({ id, user });
  }

  @Get('by-email')
  async getByEmail(@Query('email') email: string) {
    const useCase = new SearchUserPartnerToEmail(this.repo);
    return useCase.execute(email);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const useCase = new SearchToId(this.repo);
    return useCase.execute(id);
  }

  @Get()
  async getByName(@Query('name') name: string) {
    const useCase = new SearchUserPartnerName(this.repo);
    return useCase.execute(name);
  }
}
