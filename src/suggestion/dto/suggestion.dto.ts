import { IsString, IsNumber } from 'class-validator';

export class QuerySuggestionDTO {
  @IsString()
  name: string;

  @IsNumber()
  foodTastes: number;

  @IsNumber()
  preferences: number;

  @IsNumber()
  typeResponse: number;
}
