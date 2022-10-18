import { IsString, IsNumber } from 'class-validator';

export class QueryPreferencesDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  recomenda: number;
}
