import { BaseEntity, Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';
import { Item } from './Item';

@Entity()
export class Category extends BaseEntity<Category, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  name!: string;

  @Property()
  order!: number;

  @ManyToOne(() => User)
  owner: User;

  @OneToMany(() => Item, (item) => item.category)
  items = new Collection<Item>(this);
}
