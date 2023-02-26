import { DataSource } from "typeorm";
import source from "../../config/ormconfig";

let connection: DataSource;

connection = source;

export const getConnection = () => connection;
