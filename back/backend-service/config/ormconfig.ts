require('dotenv').config()
import 'reflect-metadata';
import { DataSource } from "typeorm";
import config from 'config';

const postgresConfig = config.get<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  }>('postgresConfig');

const source = new DataSource({
  ...postgresConfig,
  type: "postgres",
  logging: false,
  synchronize: false,
  entities: ["./src/db/entities/**/*.ts"],
  migrations: ["./src/db/migrations/**/*.ts"],
  subscribers: ["./src/db/subscribers/**/*.ts"]
});

export default source