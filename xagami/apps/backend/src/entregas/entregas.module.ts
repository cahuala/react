import { Module } from '@nestjs/common';
import { EntregasController } from './entregas.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [EntregasController],
})
export class EntregasModule {}
