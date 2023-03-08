import {
  NearestProductsQueryDto,
  PaginationQueryDto,
  Product,
  ProductRepositoryInterface,
} from '@app/shared';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductRepositoryInterface,
  ) {}

  async getNearestProducts(data: NearestProductsQueryDto): Promise<Product[]> {
    const query = `
    ST_DistanceSphere(
      ST_MakePoint(${data.args.longitude}, ${data.args.latitude}),
      ST_MakePoint(products.longitude, products.latitude)
    ) as distance
    `
    return await this.productRepository.entity.createQueryBuilder('products')
    .addSelect(query)
    .orderBy('distance')
    .limit(data.args.limit)
    .offset(data.args.offset)
    .getMany();
  }

  async getProductsHomeList({
    offset,
    limit,
  }: PaginationQueryDto): Promise<Product[]> {
    return await this.productRepository.findAll({
      skip: offset,
      take: limit,
      relations: ['images']
    });
  }
}
