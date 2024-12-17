import { Module } from '@nestjs/common';
import { EventoIrrigacaoService } from './evento_irrigacao.service';
import { EventoIrrigacaoController } from './evento_irrigacao.controller';

@Module({
  controllers: [EventoIrrigacaoController],
  providers: [EventoIrrigacaoService],
})
export class EventoIrrigacaoModule {}
