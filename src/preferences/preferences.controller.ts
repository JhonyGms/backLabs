import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { QueryPreferencesDTO } from './dto/preferences.dto';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Get('/')
  async getAll(@Res() res) {
    const data = await this.preferencesService.getFoodTastes();

    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }

  @Post('/query')
  async createPost(@Res() res, @Body() body: QueryPreferencesDTO) {
    const data = await this.preferencesService.postCreate(body);
    console.log(body);
    return res.status(HttpStatus.OK).json({
      message: 'Request Complet',
      data,
    });
  }
}
