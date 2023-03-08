import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from '@app/shared';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FetchProductsArgs, FetchNearestProductsArgs } from './dto';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    @Inject('PRODUCTS_SERVICE') private readonly productService: ClientProxy,
  ) {}

  @Query((returns) => [Product], { name: 'nearestProducts' })
  findNearest(@Args() args: FetchNearestProductsArgs) {
    return this.productService.send(
      {
        cmd: 'ms-get-nearestProducts',
      },
      { args },
    );
  }

  @Query((returns) => [Product], { name: 'products' })
  findAllRecent(@Args() args: FetchProductsArgs) {
    return this.productService.send(
      {
        cmd: 'ms-get-products',
      },
      { args },
    );
  }
}

