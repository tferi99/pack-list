import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ActivityModule,
    CategoryModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
