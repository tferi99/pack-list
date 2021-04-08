import { BaseEntity, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Item } from './item';
import { User } from './user';
import { Category } from './category';

@Entity()
export class Trip extends BaseEntity<Trip, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne(() => User)
  owner: User;

  @ManyToMany(() => Category)
  categories: Collection<Category> = new Collection<Category>(this);

  @ManyToMany(() => Item)
  usedItems: Collection<Item> = new Collection<Item>(this);
}
