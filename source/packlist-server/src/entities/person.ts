import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Person {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  name: string;

  @Property({ length: 256 })
  email: string;

  @Property({ nullable: true })
  rank?: number;
}
