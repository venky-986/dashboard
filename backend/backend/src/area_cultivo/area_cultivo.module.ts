import { Module } from '@nestjs/common';
import { AreaCultivoService } from './area_cultivo.service';
import { AreaCultivoController } from './area_cultivo.controller';

@Module({
  controllers: [AreaCultivoController],
  providers: [AreaCultivoService],
})
export class AreaCultivoModule {}
