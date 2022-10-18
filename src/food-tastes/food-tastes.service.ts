import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { foodTastes } from './entities/food-tastes.entity';
import { QueryFoodTastesDTO } from './dto/food-tastes.dto';

@Injectable()
export class FoodTastesService {
  constructor(
    @InjectRepository(foodTastes)
    private readonly foodTastesRepository: Repository<foodTastes>,
  ) {}

  async getFoodTastes(): Promise<foodTastes[]> {
    return await this.foodTastesRepository.find();
  }

  async postCreate(dto: QueryFoodTastesDTO) {
    const post = this.foodTastesRepository.create(dto as any);
    return await this.foodTastesRepository.save(post);
  }
}
