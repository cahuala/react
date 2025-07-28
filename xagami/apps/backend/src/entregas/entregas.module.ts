import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EntregasController } from './entregas.controller';
import { DbModule } from 'src/db/db.module';
import { EntregasPrisma } from './entregas.prisma';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [EntregasController],
  providers: [EntregasPrisma],
})
export class EntregasModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(EntregasController);
  }
}
