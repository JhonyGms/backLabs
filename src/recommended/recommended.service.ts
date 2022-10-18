import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { recommended } from './entities/recommended.entity';
import { QueryRecommendedDTO } from './dto';

@Injectable()
export class RecommendedService {
  constructor(
    @InjectRepository(recommended)
    private readonly recommendedRepository: Repository<recommended>,
  ) {}

  async getRecommended(): Promise<recommended[]> {
    return await this.recommendedRepository.find();
  }

  async postCreate(dto: QueryRecommendedDTO) {
    const post = this.recommendedRepository.create(dto as any);
    return await this.recommendedRepository.save(post);
  }

  async postEdit(id: number, dto: QueryRecommendedDTO) {
    const post = await this.recommendedRepository.findOne(id as any);

    if (!post) throw new NotFoundException('Recommended does not exist');
    const editedPost = Object.assign(post, dto);
    return await this.recommendedRepository.save(editedPost);
  }
}
