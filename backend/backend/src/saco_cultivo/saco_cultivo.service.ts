import { Injectable } from '@nestjs/common';
import { CreateSacoCultivoDto } from './dto/create-saco_cultivo.dto';
import { UpdateSacoCultivoDto } from './dto/update-saco_cultivo.dto';

@Injectable()
export class SacoCultivoService {
  create(createSacoCultivoDto: CreateSacoCultivoDto) {
    return 'This action adds a new sacoCultivo';
  }

  findAll() {
    return `This action returns all sacoCultivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sacoCultivo`;
  }

  update(id: number, updateSacoCultivoDto: UpdateSacoCultivoDto) {
    return `This action updates a #${id} sacoCultivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sacoCultivo`;
  }
}
