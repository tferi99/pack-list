import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Category extends BaseEntity<Category, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  name!: string;

  active!: boolean;
}
