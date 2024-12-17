import { Injectable } from '@nestjs/common';
import { CreateEventoIrrigacaoDto } from './dto/create-evento_irrigacao.dto';
import { UpdateEventoIrrigacaoDto } from './dto/update-evento_irrigacao.dto';

@Injectable()
export class EventoIrrigacaoService {
  create(createEventoIrrigacaoDto: CreateEventoIrrigacaoDto) {
    return 'This action adds a new eventoIrrigacao';
  }

  findAll() {
    return `This action returns all eventoIrrigacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventoIrrigacao`;
  }

  update(id: number, updateEventoIrrigacaoDto: UpdateEventoIrrigacaoDto) {
    return `This action updates a #${id} eventoIrrigacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventoIrrigacao`;
  }
}
