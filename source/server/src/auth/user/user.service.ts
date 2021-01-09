import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../../entities/User';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: EntityRepository<User>,
  ) {}

  async save(user: User): Promise<User> {
    await this.repo.persistAndFlush(user);
    return user;
  }
}
