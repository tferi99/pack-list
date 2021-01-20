import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { OrmModule } from '../orm/orm.module';

@Module({
  imports: [
    //MikroOrmModule.forFeature([User])
    OrmModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AuthModule {}
