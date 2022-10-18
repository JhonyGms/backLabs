import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { FoodTastesService } from './food-tastes.service';
import { QueryFoodTastesDTO } from './dto/food-tastes.dto';

@Controller('food-tastes')
export class FoodTastesController {
  constructor(private readonly foodTastesService: FoodTastesService) {}

  @Get('/')
  async getAll(@Res() res) {
    const data = await this.foodTastesService.getFoodTastes();

    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }

  @Post('/query')
  async createPost(@Res() res, @Body() body: QueryFoodTastesDTO) {
    const data = await this.foodTastesService.postCreate(body);
    console.log(body);
    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }
}
