import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Category } from '../entities/category.entity';
import { CategoryRepositoryInterface } from '../interfaces/category.repository.interface';

@Injectable()
export class CategoryRepository
  extends BaseAbstractRepository<Category>
  implements CategoryRepositoryInterface
{
  constructor(
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>,
  ) {
    super(CategoryRepository);
  }
}
