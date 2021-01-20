import { EntityManager } from '@mikro-orm/core';

export class MikroOrmUtil {
  static dumpAll(em: EntityManager): void {
    MikroOrmUtil.dumpIdentityMap(em);
    MikroOrmUtil.dumpPersistStack(em);
    MikroOrmUtil.dumpRemoveStack(em);
    MikroOrmUtil.dumpChangeSets(em);
  }

  static dumpIdentityMap(em: EntityManager): void {
    const uow = em.getUnitOfWork();

    const im = uow.getIdentityMap();
    const keys = im.keys();
    console.log('===================================');
    console.log('Identity Map - items: ' + keys.length);
    console.log('===================================');
    for (const key of keys) {
      console.log('[' + key + ']: ', im.get(key));
    }
  }

  static dumpPersistStack(em: EntityManager): void {
    const uow = em.getUnitOfWork();

    const ps = uow.getPersistStack();
    console.log('===================================');
    console.log('Persist Stack - items: ' + ps.size);
    console.log('===================================');
    let n = 0;
    ps.forEach((i) => {
      console.log('[' + n + ']: ', i);
      n++;
    });
  }

  static dumpRemoveStack(em: EntityManager): void {
    const uow = em.getUnitOfWork();

    const rs = uow.getRemoveStack();
    console.log('===================================');
    console.log('Remove Stack - items: ' + rs.size);
    console.log('===================================');
    let n = 0;
    rs.forEach((i) => {
      console.log('[' + n + ']: ', i);
      n++;
    });
  }

  static dumpChangeSets(em: EntityManager): void {
    const uow = em.getUnitOfWork();

    const cs = uow.getChangeSets();
    console.log('===================================');
    console.log('Change Sets');
    console.log('===================================');
    cs.forEach((cs) => {
      console.log('### ChangeSet[' + cs.name + ' / ' + cs.type + ']', cs);
    });
  }
}
