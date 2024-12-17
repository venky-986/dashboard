import { Module } from '@nestjs/common';
import { UnidadeMonitoramentoService } from './unidade_monitoramento.service';
import { UnidadeMonitoramentoController } from './unidade_monitoramento.controller';

@Module({
  controllers: [UnidadeMonitoramentoController],
  providers: [UnidadeMonitoramentoService],
})
export class UnidadeMonitoramentoModule {}
