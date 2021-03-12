import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../../../entities/User";
import { AuthService } from "../auth/auth.service";
import { UserFilterDto } from "./user-filter.dto";
import { FilterQuery } from '@mikro-orm/core/typings';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Get()
  async getAllFiltered(@Query() filter: UserFilterDto): Promise<User[]> {
    return this.userService.getAll(filter as FilterQuery<User>);
  }

  @Get('/test')
  async test(): Promise<void> {
    return this.userService.test();
  }

  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.get(id);
  }

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
