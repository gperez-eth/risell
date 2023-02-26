import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @MessagePattern({ cmd: 'ms-get-products' })
  async getProductsHomeList(pagination: PaginationQueryDto) {
    return await this.productService.getProductsHomeList(pagination);
  }
}
