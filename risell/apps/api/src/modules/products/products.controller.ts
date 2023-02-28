import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_SERVICE') private readonly productService: ClientProxy,
  ) {}

  @Get('products')
  async getUsers(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return this.productService.send(
      {
        cmd: 'ms-get-products',
      },
      { limit, offset },
    );
  }
}
