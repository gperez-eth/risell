import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RsGetProductsDto } from './dto';

/* ------------------------------------------------*/

@Controller('products')
export class ProductsController {
  constructor(@Inject('RABBIT_SERVICE_PRODUCTS') private client: ClientProxy) {}

  @Get()
  async getProducts(): Promise<Observable<RsGetProductsDto>> {
    return this.client.send<RsGetProductsDto>({ cmd: 'ms-get-products' }, '');
  }
}
