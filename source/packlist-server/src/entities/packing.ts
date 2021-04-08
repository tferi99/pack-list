import { BaseEntity, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Trip } from './trip';
import { User } from './user';
import { Category } from './category';

@Entity()
export class Packing extends BaseEntity<Packing, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Trip)
  trip: Trip;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
