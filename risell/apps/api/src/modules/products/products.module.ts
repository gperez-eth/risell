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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: __dirname + '/graphql/schema.graphql',
      sortSchema: true,
    }),
  ],
  providers: [ProductsResolver],
})
export class ProductsModule {}
