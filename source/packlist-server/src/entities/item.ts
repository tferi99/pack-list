import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from './category';

@Entity()
export class Item extends BaseEntity<Item, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  order!: number;

  @ManyToOne(() => Category)
  category!: Category;
}
