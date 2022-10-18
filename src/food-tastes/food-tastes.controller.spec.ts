import { Test, TestingModule } from '@nestjs/testing';
import { FoodTastesController } from './food-tastes.controller';

describe('FoodTastesController', () => {
  let controller: FoodTastesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodTastesController],
    }).compile();

    controller = module.get<FoodTastesController>(FoodTastesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
