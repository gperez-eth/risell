import { ProductEntity } from '@app/shared';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: [ProductEntity],
  migrations: ['dist/apps/products/apps/products/src/db/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
