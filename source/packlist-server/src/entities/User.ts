import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'app-user' })
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  username!: string;

  @Property()
  password!: string;

  @Property({ default: false })
  admin!: boolean;

  @Property({ default: true })
  active!: boolean;
}
