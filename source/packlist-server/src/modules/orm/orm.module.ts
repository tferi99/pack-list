import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../../entities/User';
import { Person } from '../../entities/Person';

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
