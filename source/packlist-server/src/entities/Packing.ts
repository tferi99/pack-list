import { BaseEntity, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Trip } from './Trip';
import { User } from './User';
import { Category } from './Category';

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
