import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { ProfessionalModule } from './professional/professional.module';
import { ServiceModule } from './service/service.module';
import { EntregasModule } from './entregas/entregas.module';
import { UserPartnerModule } from './user-partner/user-partner.module';

@Module({
  imports: [
    AuthModule,
    DbModule,
    ProfessionalModule,
    ServiceModule,
    EntregasModule,
    UserPartnerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
