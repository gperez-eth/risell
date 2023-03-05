import { MigrationInterface, QueryRunner } from 'typeorm';

export class initdb1677819010140 implements MigrationInterface {
  name = 'initdb1677819010140';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "categoryId" character(36) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" character varying NOT NULL, "isShippable" boolean NOT NULL, "isAuction" boolean NOT NULL, "price" bigint NOT NULL, "currencyId" character(36) NOT NULL, "views" smallint NOT NULL, "likes" smallint NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
