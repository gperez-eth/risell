import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products.controller';
import { SharedModule } from '@app/shared';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule.registerRmq(
      'PRODUCTS_SERVICE',
      process.env.RABBITMQ_PRODUCT_QUEUE,
    ),
  ],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
