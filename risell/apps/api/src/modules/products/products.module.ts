import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule.registerRmq(
      'PRODUCTS_SERVICE',
      process.env.RABBITMQ_PRODUCT_QUEUE,
    ),
  ],
  providers: [ProductsResolver],
})
export class ProductsModule {}
