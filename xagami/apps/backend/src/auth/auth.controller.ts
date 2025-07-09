/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post } from '@nestjs/common';
import { LoginUser, SaveOfUser, User } from '@xagami/core';
import { UserPrisma } from './user.prisma';
import { BcryptProvider } from './bcrypt.provider';
import * as jwt from 'jsonwebtoken';

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
}
