import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Packing } from './packing';
import { Item } from './item';

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
