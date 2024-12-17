import { Injectable } from '@nestjs/common';
import { CreateLeituraSensorDto } from './dto/create-leitura_sensor.dto';
import { UpdateLeituraSensorDto } from './dto/update-leitura_sensor.dto';

@Injectable()
export class LeituraSensorService {
  create(createLeituraSensorDto: CreateLeituraSensorDto) {
    return 'This action adds a new leituraSensor';
  }

  findAll() {
    return `This action returns all leituraSensor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leituraSensor`;
  }

  update(id: number, updateLeituraSensorDto: UpdateLeituraSensorDto) {
    return `This action updates a #${id} leituraSensor`;
  }

  remove(id: number) {
    return `This action removes a #${id} leituraSensor`;
  }
}
