import {
  PaginationQueryDto,
  ProductEntity,
  ProductRepositoryInterface,
} from '@app/shared';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductRepositoryInterface,
  ) {}

  async getProductsHomeList({
    offset,
    limit,
  }: PaginationQueryDto): Promise<ProductEntity[]> {
    return await this.productRepository.findAll({
      skip: offset,
      take: limit,
    });
  }
}
