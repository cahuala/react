import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { UserPrisma } from './user.prisma';
import { BcryptProvider } from './bcrypt.provider';
import { AuthMiddleware } from './auth.middleware';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [
    UserPrisma,
    BcryptProvider,
    AuthMiddleware,
    GoogleStrategy,
    FacebookStrategy,
  ],
  exports: [AuthMiddleware, UserPrisma],
})
export class AuthModule {}
