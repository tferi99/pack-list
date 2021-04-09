import { BaseEntity, Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from './category';
import { Trip } from './trip';
import { Packing } from './packing';
import { UserDto } from '../modules/auth/user/user.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ToBoolean } from '../common/utils/to-boolean';

@Entity({ tableName: 'app_user' })
export class User extends BaseEntity<User, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ length: 128 })
  @IsString()
  username!: string;

  @Property({ length: 128 })
  @IsString()
  password!: string;

  @Property({ default: false })
  @IsBoolean()
  admin!: boolean;

  @Property({ default: true })
  @IsBoolean()
  active!: boolean;

  @OneToMany(() => Category, (trip) => trip.owner)
  @IsOptional()
  trips?: Collection<Trip> = new Collection<Trip>(this);

  @OneToMany(() => Category, (category) => category.owner)
  @IsOptional()
  categories?: Collection<Category> = new Collection<Category>(this);

  @OneToMany(() => Packing, (packing) => packing.user)
  @IsOptional()
  packings?: Collection<Packing> = new Collection<Packing>(this);
}
