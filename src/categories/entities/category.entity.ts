import { Subcategory } from 'src/subcategories/entities/subcategory.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('increment')
  category_id: number;

  @Column('text', {
    unique: true,
  })
  category_name: string;

  @Column('text', {
    default: 'active',
  })
  category_state: string;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category, {
    cascade: true,
    eager: true,
  })
  subcategory?: Subcategory[];
}
