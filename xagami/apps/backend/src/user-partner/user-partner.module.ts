import { Module } from '@nestjs/common';
import { UserPartnerController } from './user-partner.controller';

@Module({
  controllers: [UserPartnerController]
})
export class UserPartnerModule {}
