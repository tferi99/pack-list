import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository, MikroORM, QueryOrder, wrap } from '@mikro-orm/core';
import { User } from '../../../entities/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: EntityRepository<User>,
    private readonly orm: MikroORM,
    private readonly em: EntityManager
  ) {}

  async getAll(): Promise<User[]> {
    console.log('### getAll')
    //return this.repo.findAll({}, { id2: QueryOrder.DESC }, 3);
    //return this.repo.find({}, { id2: QueryOrder.DESC }, 3);
    //return this.em.find(User, {});
    //return this.em.find(User, { id: { $gte: 3 } }, [], { id: 'ASC' }, 3);
    return this.repo.find({ id: { $gte: 3 } }, [], { id: 'ASC' }, 3 );
  }

  async save(dto: User): Promise<User> {
    const user = new User();
    wrap(user).assign(dto);
    //await this.repo.persist(u);
    await this.repo.persistAndFlush(user);
/*    console.log('### POST: ', user);
    await this.repo.persist(user);*/
    //const newObj = this.em.create(User, user);

/*    await this.em.persistAndFlush(newObj);
    //await this.em.persist(newObj);*/

    return user;
  }
}
