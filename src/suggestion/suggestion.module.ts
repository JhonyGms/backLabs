import { Module } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionController } from './suggestion.controller';
import { suggestion } from './entities/suggestion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([suggestion])],
  providers: [SuggestionService],
  controllers: [SuggestionController],
})
export class SuggestionModule {}
