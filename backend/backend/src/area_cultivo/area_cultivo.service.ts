import { Injectable } from '@nestjs/common';
import { CreateAreaCultivoDto } from './dto/create-area_cultivo.dto';
import { UpdateAreaCultivoDto } from './dto/update-area_cultivo.dto';

@Injectable()
export class AreaCultivoService {
  create(createAreaCultivoDto: CreateAreaCultivoDto) {
    return 'This action adds a new areaCultivo';
  }

  findAll() {
    return `This action returns all areaCultivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} areaCultivo`;
  }

  update(id: number, updateAreaCultivoDto: UpdateAreaCultivoDto) {
    return `This action updates a #${id} areaCultivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} areaCultivo`;
  }
}
