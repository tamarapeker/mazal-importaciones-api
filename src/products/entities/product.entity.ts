import { Subcategory } from 'src/subcategories/entities/subcategory.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('increment')
  product_id: number;

  @Column('text', { unique: true })
  product_code: string;

  @Column('text')
  product_name: string;

  @Column('text', { nullable: true })
  product_description: string;

  @Column('text', { array: true, nullable: true })
  product_measures: string[];

  @Column('text', { nullable: true })
  product_unit: string;

  @Column('text', { nullable: true })
  product_min_cant: string;

  @Column('text', { nullable: true })
  product_cant_bulto: string;

  @Column('text', { nullable: true })
  product_image: string;

  @Column('date', { default: new Date() })
  product_timestamp: Date;

  @Column('text', { default: 'active' })
  product_state: string;

  @ManyToMany(
    () => Subcategory,
    (subcateogry) => subcateogry.products, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'subcategory_product',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
    inverseJoinColumn: {
      name: 'subcategory_id',
      referencedColumnName: 'subcategory_id',
    },
  })
  subcategories?: Subcategory[];
}
