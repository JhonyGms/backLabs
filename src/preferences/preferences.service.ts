import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { preferences } from './entities/preferences.entity';
import { QueryPreferencesDTO } from './dto/preferences.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectRepository(preferences)
    private readonly foodTastesRepository: Repository<preferences>,
  ) {}

  async getFoodTastes(): Promise<preferences[]> {
    return await this.foodTastesRepository.find();
  }

  async postCreate(dto: QueryPreferencesDTO) {
    const post = this.foodTastesRepository.create(dto as any);
    return await this.foodTastesRepository.save(post);
  }
}
