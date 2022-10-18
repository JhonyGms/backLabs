import { recommendedTypeResponse } from '../enums';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';

export class QueryRecommendedDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  foodTastes: number;

  @IsNumber()
  preferences: number;

  @IsEnum(recommendedTypeResponse, {
    message: `Invalid option. valids options are ${EnumToString(
      recommendedTypeResponse,
    )}`,
  })
  typeResponse: recommendedTypeResponse;
}
