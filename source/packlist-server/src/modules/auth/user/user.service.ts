import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { User } from '../../../entities/User';
import { MikroOrmUtil } from '../../../common/utils/MikroOrmUtil';
import { MikroOrmCrudServiceBase } from '../../../common/services/MikroOrmCrudServiceBase';

@Injectable()
export class UserService extends MikroOrmCrudServiceBase<User, 'id'> {
  constructor(
    @InjectRepository(User)
    private readonly repo: EntityRepository<User>,
    // private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {
    super();
  }

  //-------------------- abstract ------------------------
  getEntityRepository(): EntityRepository<User> {
    return this.repo;
  }

  createNewEntity(): User {
    return new User();
  }

  //-------------------- custom ------------------------
  async test(): Promise<void> {
    // fetch objects
    await this.get(3);

    // fetch create objects
    const u2 = new User();
    u2.username = 'Peti';
    u2.password = '123';
    u2.active = true;
    u2.admin = false;
    await this.em.persist(u2);

    const u3 = new User();
    // u3.id = 10000;            // this ID will be NULL
    u3.username = 'Anna';
    u3.password = 'xyz';
    u3.active = false;
    u3.admin = false;
    await this.em.persist(u3);

    const u4 = this.repo.getReference(10000);
    this.repo.remove(u4);

    console.log('------------------------ test ----------------------------------');
    MikroOrmUtil.dumpAll(this.em);
    console.log('------------------------------- end ----------------------------------------');
    await this.em.flush();
  }

  async getByFilter(username: string): Promise<User[]> {
    return this.repo.find({ username });
  }
}
