import {
  Auction,
  Bid,
  Category,
  Currency,
  Product,
  ProductImages,
  User,
} from '@app/shared';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: [Product, ProductImages, Currency, Bid, Auction, User, Category],
  migrations: ['dist/apps/services/apps/services/src/db/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
