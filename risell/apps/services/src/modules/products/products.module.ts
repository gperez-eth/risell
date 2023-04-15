import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SharedModule,
  PostgresDBModule,
  SharedService,
  Product,
  ProductsRepository,
  ProductImages,
  Currency,
  Bid,
  Auction,
  User,
  Category,
  CategoryRepository,
} from '@app/shared';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    SharedModule,
    PostgresDBModule,
    TypeOrmModule.forFeature([
      Product,
      ProductImages,
      Currency,
      Bid,
      Auction,
      User,
      Category,
    ]),
  ],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductServiceInterface',
      useClass: ProductsService,
    },
    {
      provide: 'ProductsRepositoryInterface',
      useClass: ProductsRepository,
    },
    {
      provide: 'CategoriesRepositoryInterface',
      useClass: CategoryRepository,
    },
    {
      provide: 'SharedServiceInterface',
      useClass: SharedService,
    },
  ],
})
export class ProductsModule {}
