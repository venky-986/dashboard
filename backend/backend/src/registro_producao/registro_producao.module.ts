import { Module } from '@nestjs/common';
import { RegistroProducaoService } from './registro_producao.service';
import { RegistroProducaoController } from './registro_producao.controller';

@Module({
  controllers: [RegistroProducaoController],
  providers: [RegistroProducaoService],
})
export class RegistroProducaoModule {}
