import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { OrmModule } from '../orm/orm.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    //MikroOrmModule.forFeature([User])
    OrmModule,
  ],
  controllers: [UserController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
