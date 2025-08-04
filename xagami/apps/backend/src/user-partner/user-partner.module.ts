import { Module } from '@nestjs/common';
import { UserPartnerController } from './user-partner.controller';
import { ClientePartnerPrisma } from './user-partner.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [ClientePartnerPrisma],
  controllers: [UserPartnerController],
})
export class UserPartnerModule {}
