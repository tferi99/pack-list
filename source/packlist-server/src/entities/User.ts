import { BaseEntity, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from './Category';

@Entity({ tableName: 'app_user' })
export class User extends BaseEntity<User, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  username!: string;

  @Property({ length: 128 })
  password!: string;

  @Property({ default: false })
  admin!: boolean;

  @Property({ default: true })
  active!: boolean;

  @Property({ nullable: true })
  rank?: number;
}
