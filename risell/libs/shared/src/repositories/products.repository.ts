import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { ProductEntity } from '../entities/product.entity';
import { ProductRepositoryInterface } from '../interfaces/products.repository.interface';

@Injectable()
export class ProductsRepository
  extends BaseAbstractRepository<ProductEntity>
  implements ProductRepositoryInterface
{
  constructor(
    @InjectRepository(ProductEntity)
    private readonly ProductRepository: Repository<ProductEntity>,
  ) {
    super(ProductRepository);
  }
}
