import { Injectable } from '@nestjs/common';
import { CreateUnidadeMonitoramentoDto } from './dto/create-unidade_monitoramento.dto';
import { UpdateUnidadeMonitoramentoDto } from './dto/update-unidade_monitoramento.dto';

@Injectable()
export class UnidadeMonitoramentoService {
  create(createUnidadeMonitoramentoDto: CreateUnidadeMonitoramentoDto) {
    return 'This action adds a new unidadeMonitoramento';
  }

  findAll() {
    return `This action returns all unidadeMonitoramento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadeMonitoramento`;
  }

  update(
    id: number,
    updateUnidadeMonitoramentoDto: UpdateUnidadeMonitoramentoDto,
  ) {
    return `This action updates a #${id} unidadeMonitoramento`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadeMonitoramento`;
  }
}
