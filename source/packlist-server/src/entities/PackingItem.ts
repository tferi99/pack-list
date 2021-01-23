import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';
import { Packing } from './Packing';
import { Item } from './Item';

@Entity()
export class PackingItem extends BaseEntity<PackingItem, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  packed!: boolean;

  @ManyToOne(() => Packing)
  packing: Packing;

  @ManyToOne(() => Item)
  item: Item;
}
