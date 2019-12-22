import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Activity } from '../activity/activity.entity';
import { Category } from '../category/category.entity';
import { Item } from '../item/item.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'packlist',
  entities: [Activity, Category, Item],
  synchronize: true,
  logging: true,
};
