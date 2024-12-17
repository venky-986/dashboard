import { Injectable } from '@nestjs/common';
import { CreateConfiguracoesNotificacaoDto } from './dto/create-configuracoes_notificacao.dto';
import { UpdateConfiguracoesNotificacaoDto } from './dto/update-configuracoes_notificacao.dto';

@Injectable()
export class ConfiguracoesNotificacaoService {
  create(createConfiguracoesNotificacaoDto: CreateConfiguracoesNotificacaoDto) {
    return 'This action adds a new configuracoesNotificacao';
  }

  findAll() {
    return `This action returns all configuracoesNotificacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configuracoesNotificacao`;
  }

  update(
    id: number,
    updateConfiguracoesNotificacaoDto: UpdateConfiguracoesNotificacaoDto,
  ) {
    return `This action updates a #${id} configuracoesNotificacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} configuracoesNotificacao`;
  }
}
