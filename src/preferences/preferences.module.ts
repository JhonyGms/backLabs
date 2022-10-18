import { Module } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { preferences } from './entities/preferences.entity';
@Module({
  imports: [TypeOrmModule.forFeature([preferences])],
  providers: [PreferencesService],
  controllers: [PreferencesController],
})
export class PreferencesModule {}
