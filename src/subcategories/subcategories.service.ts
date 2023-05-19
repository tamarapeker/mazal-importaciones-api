import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategory } from './entities/subcategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectRepository(Subcategory)
    private readonly subcategoryRepository: Repository<Subcategory>,
  ) {}
  create(createSubcategoryDto: CreateSubcategoryDto) {
    return 'This action adds a new subcategory';
  }

  findAll() {
    return this.subcategoryRepository.find({ relations: ['products'] });
  }

  async findOne(id: number) {
    // const subcategory = this.subcategoryRepository.findOneBy({
    //   subcategory_id: id,
    // });
    const queryBuilder =
      this.subcategoryRepository.createQueryBuilder('subcat');
    const subcategory = await queryBuilder
      .leftJoinAndSelect('subcat.products', 'product')
      .getOne();
    if (!subcategory)
      throw new NotFoundException(`Subcategory with id ${id} not found`);
    return subcategory;
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return `This action updates a #${id} subcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategory`;
  }
}
