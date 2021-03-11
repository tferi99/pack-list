import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { OrmModule } from '../orm/orm.module';

@Module({
  imports: [OrmModule],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
