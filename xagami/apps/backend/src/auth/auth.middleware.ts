/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { User } from '@xagami/core';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserPrisma } from './user.prisma';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly repo: UserPrisma) {}
  async use(req: any, res: any, next: () => void) {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) {
        throw new HttpException('Token não informado', 401);
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET!) as User;
      if (!payload) {
        throw new HttpException('Token inválido', 401);
      }
      const user = await this.repo.searchToEmail(payload.email);
      delete user?.password;

      if (!user) {
        throw new HttpException('Utilizador não encontrado', 401);
      }
      req.user = user;
      next();
    } catch (error) {
      throw new HttpException(`Token Invalido ${error}`, 401);
    }
  }
}
