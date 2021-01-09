import { Body, Controller, Post } from '@nestjs/common';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { User } from '../../entities/User';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Post()
  async create(@Body() dto: User): Promise<User> {
    return this.userService.save(dto);
  }
}
