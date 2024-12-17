import { Module } from '@nestjs/common';
import { SacoCultivoService } from './saco_cultivo.service';
import { SacoCultivoController } from './saco_cultivo.controller';

@Module({
  controllers: [SacoCultivoController],
  providers: [SacoCultivoService],
})
export class SacoCultivoModule {}
