import {
  Category,
  CategoryRepositoryInterface,
  NearestProductsQueryDto,
  PaginationQueryDto,
  Product,
  ProductInfoQueryDto,
  ProductRepositoryInterface,
} from '@app/shared';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductRepositoryInterface,
    @Inject('CategoriesRepositoryInterface')
    private readonly categoryRepository: CategoryRepositoryInterface,
  ) {}

  async getNearestProducts({
    limit,
    offset,
    location,
  }: NearestProductsQueryDto): Promise<Product[]> {
    const query = `
    ST_DistanceSphere(
      ST_MakePoint(${location}),
      ST_MakePoint(products.longitude, products.latitude)
    ) as distance
    `;
    return await this.productRepository.entity
      .createQueryBuilder('products')
      .addSelect(query)
      .orderBy('distance')
      .limit(limit)
      .offset(offset)
      .getMany();
  }

  async getProductsHomeList({
    offset,
    limit,
  }: PaginationQueryDto): Promise<Product[]> {
    return await this.productRepository.findAll({
      skip: offset,
      take: limit,
      relations: ['images', 'currency', 'auction'],
    });
  }

  async getProductInfo({ productId }: ProductInfoQueryDto): Promise<Product[]> {
    return await this.productRepository.findAll({
      where: { id: productId },
      order: {
        auction: {
          bids: {
            bidTime: 'DESC',
          },
        },
      },
      relations: ['images', 'user', 'currency', 'auction.bids.user'],
    });
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
