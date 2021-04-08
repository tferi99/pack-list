import { BaseEntity, Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user';
import { Item } from './item';
import { CategoryGroup } from './category-group';

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

  @ManyToOne(() => CategoryGroup)
  categoryGroup!: CategoryGroup;
}
