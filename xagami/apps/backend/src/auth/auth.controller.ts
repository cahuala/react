/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserPrisma } from './user.prisma';
import { FastifyReply } from 'fastify';
import { BcryptProvider } from './bcrypt.provider';
import * as jwt from 'jsonwebtoken';
import { LoginUser, SaveOfUser, User } from '@xagami/core';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly repo: UserPrisma,
    private readonly crypto: BcryptProvider,
  ) {}

  @Post('login')
  async login(@Body() date: { email: string; password: string }) {
    const caseUse = new LoginUser(this.repo, this.crypto);
    const user = await caseUse.execute({
      email: date.email,
      password: date.password,
    });
    const secret = process.env.JWT_SECRET ?? '';
    return jwt.sign(user, secret, { expiresIn: '3d' });
  }

  @Post('register')
  async register(@Body() user: User) {
    const caseOfUse = new SaveOfUser(this.repo, this.crypto);
    await caseOfUse.execute(user);
  }
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {
    // será redirecionado automaticamente
  }
  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookRedirect(@Req() req: any, @Res() res: FastifyReply) {
    const { email, name } = req.user;

    let user = await this.repo.searchToEmail(email);
    if (!user) {
      const newUser: User = {
        id: '',
        email,
        name,
        tipo: 'PARTICULAR',
      };
      const save = new SaveOfUser(this.repo, this.crypto);
      await save.execute(newUser);
      user = newUser;
    }

    const token = jwt.sign(user, process.env.JWT_SECRET ?? '', {
      expiresIn: '3d',
    });

    // redireciona para o frontend com o token
    res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // redireciona para Google
  }
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req: any, @Res() reply: FastifyReply) {
    const { email, name } = req.user;

    // verificar ou criar utilizador
    let user = await this.repo.searchToEmail(email);
    if (!user) {
      const newUser: User = {
        id: '',
        email,
        name,
        tipo: 'PARTICULAR',
      };
      const caseSave = new SaveOfUser(this.repo, this.crypto);
      await caseSave.execute(newUser);
      user = newUser;
    }

    const token = jwt.sign(user, process.env.JWT_SECRET ?? '', {
      expiresIn: '3d',
    });
    reply?.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  }
}
