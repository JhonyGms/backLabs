import { Module } from '@nestjs/common';
import { RecommendedController } from './recommended.controller';
import { RecommendedService } from './recommended.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { recommended } from './entities/recommended.entity';

@Module({
  imports: [TypeOrmModule.forFeature([recommended])],
  controllers: [RecommendedController],
  providers: [RecommendedService],
})
export class RecommendedModule {}
