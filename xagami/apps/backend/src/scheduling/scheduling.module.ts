/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { SchedulingPrisma } from './scheduling.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [SchedulingController],
  providers: [SchedulingPrisma],
})
export class SchedulingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(SchedulingController);
  }
}
