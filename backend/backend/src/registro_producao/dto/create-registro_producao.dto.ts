import {
  IsDate,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRegistroProducaoDto {
  @IsNotEmpty()
  @IsNumber()
  lote_id: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  data: Date;

  @IsNotEmpty()
  @IsNumber()
  quantidade_kg: number;

  @IsNotEmpty()
  @IsString()
  qualidade: string;

  @IsNotEmpty()
  @IsObject()
  problemas_encontrados: object;

  @IsNotEmpty()
  @IsString()
  observacoes: string;
}
