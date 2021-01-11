import { Body, Controller, Get, Post } from '@nestjs/common';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserService } from './user.service';
import { User } from '../../../entities/User';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post()
  async create(@Body() dto: User): Promise<User> {
    return this.userService.save(dto);
  }
}
