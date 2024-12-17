import { Module } from '@nestjs/common';
import { ConfiguracoesNotificacaoService } from './configuracoes_notificacao.service';
import { ConfiguracoesNotificacaoController } from './configuracoes_notificacao.controller';

@Module({
  controllers: [ConfiguracoesNotificacaoController],
  providers: [ConfiguracoesNotificacaoService],
})
export class ConfiguracoesNotificacaoModule {}
