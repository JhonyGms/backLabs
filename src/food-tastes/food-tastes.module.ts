import { Module } from '@nestjs/common';
import { FoodTastesService } from './food-tastes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { foodTastes } from './entities/food-tastes.entity';
import { FoodTastesController } from './food-tastes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([foodTastes])],
  controllers: [FoodTastesController],
  providers: [FoodTastesService],
})
export class FoodTastesModule {}
