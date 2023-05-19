import { Category } from 'src/categories/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'subcategory' })
export class Subcategory {
  @PrimaryGeneratedColumn('increment')
  subcategory_id: number;

  @Column('text', {
    unique: true,
  })
  subcategory_name: string;

  @Column('text', {
    default: 'active',
  })
  subcategory_state: string;

  @ManyToOne(() => Category, (category) => category.category_id, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @ManyToMany(() => Product, (product) => product.subcategories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  products?: Product[];
}
