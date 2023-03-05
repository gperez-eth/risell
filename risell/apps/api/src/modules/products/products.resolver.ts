import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductEntity } from '@app/shared';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FetchProductsArgs } from './dto/fetch-products.dto';

@Resolver(() => ProductEntity)
export class ProductsResolver {
  constructor(
    @Inject('PRODUCTS_SERVICE') private readonly productService: ClientProxy,
  ) {}

  @Query((returns) => [ProductEntity], { name: 'products' })
  findAllRecent(@Args() args: FetchProductsArgs) {
    return this.productService.send(
      {
        cmd: 'ms-get-products',
      },
      { args },
    );
  }
}
