import { Injectable } from '@nestjs/common';
import { CreateRegistroProducaoDto } from './dto/create-registro_producao.dto';
import { UpdateRegistroProducaoDto } from './dto/update-registro_producao.dto';

@Injectable()
export class RegistroProducaoService {
  create(createRegistroProducaoDto: CreateRegistroProducaoDto) {
    return 'This action adds a new registroProducao';
  }

  findAll() {
    return `This action returns all registroProducao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroProducao`;
  }

  update(id: number, updateRegistroProducaoDto: UpdateRegistroProducaoDto) {
    return `This action updates a #${id} registroProducao`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroProducao`;
  }
}
