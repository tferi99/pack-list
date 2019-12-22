import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Promise<Category[]>;
}
