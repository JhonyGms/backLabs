import { IsString, IsNumber } from 'class-validator';

export class QueryFoodTastesDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  recomenda: number;
}
