import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendedModule } from './recommended/recommended.module';
import { FoodTastesModule } from './food-tastes/food-tastes.module';
import { PreferencesModule } from './preferences/preferences.module';
import { SuggestionModule } from './suggestion/suggestion.module';

@Module({
  imports: [
    RecommendedModule,
    FoodTastesModule,
    PreferencesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api_test',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      //synchronize: true,
    }),
    SuggestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
