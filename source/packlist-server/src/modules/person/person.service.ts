import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { Person } from '../../entities/Person';
import { FilterQuery } from '@mikro-orm/core/typings';
import { User } from '../../entities/User';

@Injectable()
export class PersonService { //extends MikroOrmCrudServiceBase<Person, 'id'> {
  constructor(
    @InjectRepository(Person)
    private readonly repo: EntityRepository<Person>,
/*    // private readonly orm: MikroORM,
    private readonly em: EntityManager,*/
  ) {
  }

  async getAll(where?: FilterQuery<Person>): Promise<Person[]> {
    return this.repo.find(where, [], { id: QueryOrder.ASC });
  }

  async create(dto: Person): Promise<Person> {
    const obj = new Person();
    wrap(obj).assign(dto);
    await this.repo.persistAndFlush(obj);

    return obj;
  }

/*  //-------------------- abstract ------------------------
  getEntityRepository(): EntityRepository<Person> {
    return this.repo;
  }

  createNewEntity(): Person {
    return new Person();
  }*/

}
