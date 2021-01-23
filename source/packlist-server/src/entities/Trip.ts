import { BaseEntity, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Item } from './Item';
import { User } from './User';
import { Category } from './Category';

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
