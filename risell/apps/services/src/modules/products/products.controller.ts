import {
  NearestProductsQueryDto,
  PaginationQueryDto,
  SharedService,
} from '@app/shared';
import { Controller, Inject } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(
    @Inject('ProductServiceInterface')
    private readonly productService: ProductsService,
    @Inject('SharedServiceInterface')
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'ms-get-nearestProducts' })
  async getNearestProducts(
    @Ctx() context: RmqContext,
    @Payload() data: NearestProductsQueryDto,
  ) {
    this.sharedService.acknowledgeMessage(context);
    return await this.productService.getNearestProducts(data);
  }

  @MessagePattern({ cmd: 'ms-get-products' })
  async getProductsHomeList(
    @Ctx() context: RmqContext,
    @Payload() pagination: PaginationQueryDto,
  ) {
    this.sharedService.acknowledgeMessage(context);
    return await this.productService.getProductsHomeList(pagination);
  }
}
