import { DataSource } from "typeorm";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "db.sqlite",
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ["dist/src/migrations/**/*.js"],
};

export default new DataSource(config);
