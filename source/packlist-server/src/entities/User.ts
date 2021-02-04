import { BaseEntity, Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from './Category';
import { Trip } from './Trip';
import { Packing } from './Packing';
import { UserDto } from '../modules/auth/user/user.dto';

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

  @OneToMany(() => Category, (trip) => trip.owner)
  trips?: Collection<Trip> = new Collection<Trip>(this);

  @OneToMany(() => Category, (category) => category.owner)
  categories?: Collection<Category> = new Collection<Category>(this);

  @OneToMany(() => Packing, (packing) => packing.user)
  packings?: Collection<Packing> = new Collection<Packing>(this);

  static create(dto: UserDto): User {
    const u = new User();
    return { ...u, ...dto } as User;
  }
}
