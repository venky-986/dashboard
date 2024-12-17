import { Module } from '@nestjs/common';
import { LeituraSensorService } from './leitura_sensor.service';
import { LeituraSensorController } from './leitura_sensor.controller';

@Module({
  controllers: [LeituraSensorController],
  providers: [LeituraSensorService],
})
export class LeituraSensorModule {}
