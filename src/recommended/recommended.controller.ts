import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { RecommendedService } from './recommended.service';
import { QueryRecommendedDTO } from './dto';

@Controller('recommended')
export class RecommendedController {
  constructor(private readonly recommendedServices: RecommendedService) {}

  // @Post('/query')
  // async createPost(@Res() res) {
  //   const data = await this.recommendedServices.getRecommended();

  //   return res.status(HttpStatus.OK).json({
  //     message: 'Request Complet',
  //     data,
  //   });
  // }

  @Post('/query')
  async createPost2(@Res() res, @Body() body: QueryRecommendedDTO) {
    const data = await this.recommendedServices.postCreate(body);

    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }
}
