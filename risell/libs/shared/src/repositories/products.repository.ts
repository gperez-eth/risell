import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Product } from '../entities/product.entity';
import { ProductRepositoryInterface } from '../interfaces/products.repository.interface';

@Injectable()
export class ProductsRepository
  extends BaseAbstractRepository<Product>
  implements ProductRepositoryInterface
{
  constructor(
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>,
  ) {
    super(ProductRepository);
  }
}
