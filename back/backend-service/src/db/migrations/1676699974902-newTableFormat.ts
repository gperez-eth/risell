import { MigrationInterface, QueryRunner } from "typeorm";

export class newTableFormat1676699974902 implements MigrationInterface {
    name = 'newTableFormat1676699974902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "currency"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" character(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "currencyId" character(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "editedAt"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "editedAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "editedAt"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "editedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "title" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" character(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "currencyId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "category" character(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "currency" character(36) NOT NULL`);
    }

}
