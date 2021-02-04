import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class CategoryGroup extends BaseEntity<CategoryGroup, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  name!: string;
}
