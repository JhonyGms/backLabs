import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { suggestion } from './entities/suggestion.entity';
import { QuerySuggestionDTO } from './dto';

@Injectable()
export class SuggestionService {
  constructor(
    @InjectRepository(suggestion)
    private readonly foodTastesRepository: Repository<suggestion>,
  ) {}

  async getFoodTastes(): Promise<suggestion[]> {
    return await this.foodTastesRepository.find();
  }

  async postCreate(dto: QuerySuggestionDTO) {
    const post = this.foodTastesRepository.create(dto as any);
    return await this.foodTastesRepository.save(post);
  }
}
