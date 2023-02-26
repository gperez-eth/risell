import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Risell1676503621158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          columns: [
            {
              isPrimary: true,
              length: "36",
              name: "id",
              type: "char"
            },
             {
              length: "100",
              name: "title",
              type: "varchar"
             },
             {
              length: "300",
              name: "description",
              type: "varchar"
             },
             {
              name: "category",
              length: "36",
              type: "char"
             },
             {
              default: "now()",
              name: "createdAt",
              type: "timestamp"
             },
             {
              name: "editedAt",
              type: "timestamp"
             },
             {
              name: "isShippable",
              type: "boolean"
             },
             {
              name: "isAuction",
              type: "boolean"
             },
             {
              name: "price",
              type: "money"
             },
             {
              name: "currency",
              length: "36",
              type: "char"
             },
             {
              name: "views",
              type: "smallint"
             },
             {
              name: "likes",
              type: "smallint"
             }
          ],
          name: "products"
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("products");
    }

}
