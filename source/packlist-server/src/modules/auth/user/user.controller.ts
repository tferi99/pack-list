import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../../entities/User';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get()
  async getAllByName(@Query('username') username?: string, @Query('active', ParseIntPipe) active?: number): Promise<User[]> {
    //const filter = username ? { username } : null;
    const filter = {};
    if (username) {
      filter['username'] = username;
    }
    if (active) {
      filter['active'] = active ? true : false;
    }
    return this.userService.getAll(filter);
    //return this.userService.getByFilter(username);
  }

  @Get('/test')
  async test(): Promise<void> {
    return this.userService.test();
  }

/*  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.get(id);
  }*/

  @Post()
  async create(@Body() dto: User): Promise<User> {
    this.authService.checkCurrentUserIsAdmin();

    return this.userService.create(dto);
  }

  @Put('/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: User): Promise<User> {
    if (!this.authService.isCurrentUserAdmin()) {
      this.authService.checkThisIsCurrentUserId(id);
    }
    return this.userService.update(id, dto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    this.userService.delete(id);
  }
}
