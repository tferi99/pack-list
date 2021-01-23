import { BaseEntity, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Trip } from './Trip';
import { User } from './User';

@Entity()
export class Packing extends BaseEntity<Packing, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne(() => User)
  caller: User;

  @ManyToMany({ entity: () => Trip })
  trip: Trip;
}
