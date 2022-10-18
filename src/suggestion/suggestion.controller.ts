import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { QuerySuggestionDTO } from './dto';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Get('/')
  async getAll(@Res() res) {
    const data = await this.suggestionService.getFoodTastes();

    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }

  @Post('/query')
  async createPost(@Res() res, @Body() body: QuerySuggestionDTO) {
    const data = await this.suggestionService.postCreate(body);
    console.log(body);
    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }
}
