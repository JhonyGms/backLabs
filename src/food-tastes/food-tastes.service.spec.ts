import { Test, TestingModule } from '@nestjs/testing';
import { FoodTastesService } from './food-tastes.service';

describe('FoodTastesService', () => {
  let service: FoodTastesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodTastesService],
    }).compile();

    service = module.get<FoodTastesService>(FoodTastesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
