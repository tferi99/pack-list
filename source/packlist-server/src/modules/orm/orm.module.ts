import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../../entities/user';
import { Person } from '../../entities/person';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [User, Person],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
