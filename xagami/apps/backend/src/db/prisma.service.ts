/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Global()
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.$connect();
  }
  onModuleDestroy() {
    void this.$disconnect();
  }
}
