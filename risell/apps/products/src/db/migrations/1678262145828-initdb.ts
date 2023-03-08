import { MigrationInterface, QueryRunner } from 'typeorm';

export class initdb1678262145828 implements MigrationInterface {
  name = 'initdb1678262145828';
  products = [
    {
      title: 'Pokemon Zafiro GBA Pal ESP',
      description: 'Descripción del producto 1',
      categoryId: 0,
      editedAt: '2023-03-07 10:30:00',
      isShippable: true,
      isAuction: false,
      price: 20939,
      views: 50,
      likes: 10,
      images: [
        'https://cdn.wallapop.com/images/10420/e9/ab/__/c10420p862124545/i3060005077.jpg?pictureSize=W640',
        'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047082.jpg?pictureSize=W640',
        'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047096.jpg?pictureSize=W640',
        'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047088.jpg?pictureSize=W640',
      ],
    },
    {
      title: '3DS XL Pikachu Edition',
      description: 'Descripción del producto 2',
      categoryId: 0,
      editedAt: '2023-03-07 13:30:00',
      isShippable: true,
      isAuction: false,
      price: 20939,
      views: 50,
      likes: 10,
      images: [
        'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/00/00bbd7e3-df27-4d5a-a306-956557e3cd31?rule=$_59.JPG',
      ],
    },
    {
      title: 'Pokemon Cristal GBC precintado',
      description: 'Descripción del producto 3',
      categoryId: 0,
      editedAt: '2023-03-07 11:30:00',
      isShippable: false,
      isAuction: true,
      price: 12334,
      views: 231,
      likes: 88,
      images: [
        'https://cdn.wallapop.com/images/10420/de/ui/__/c10420p810998034/i2793715903.jpg?pictureSize=W640',
      ],
    },
    {
      title: 'Xenoblade Chronicles 3 Switch en perfecto estado',
      description: 'Descripción del producto 4',
      categoryId: 0,
      editedAt: '2023-03-07 16:30:00',
      isShippable: false,
      isAuction: true,
      price: 9343,
      views: 872,
      likes: 123,
      images: [
        'https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640',
      ],
    },
    {
      title: 'Xbox Series X EDICION HALO',
      description: 'Descripción del producto 5',
      categoryId: 0,
      editedAt: '2023-03-07 09:30:00',
      isShippable: false,
      isAuction: false,
      price: 12334,
      views: 200,
      likes: 55,
      images: [
        'https://cdn.wallapop.com/images/10420/e8/nv/__/c10420p861076772/i3054684992.jpg?pictureSize=W640',
      ],
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "currency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "currency_code" character(3) NOT NULL, "currency_symbol" character(1) NOT NULL, CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uri" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_1974264ea7265989af8392f63a1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "categoryId" character(36) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" character varying NOT NULL, "isShippable" boolean NOT NULL, "isAuction" boolean NOT NULL, "price" bigint NOT NULL, "currencyId" uuid NOT NULL, "views" smallint NOT NULL, "likes" smallint NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_images" ADD CONSTRAINT "FK_b367708bf720c8dd62fc6833161" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_11c482ccb03f44355d4e6e8c0d3" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `INSERT INTO currency ("currency_code", "currency_symbol") VALUES ('EUR', '€')`,
    );
    const currency = await queryRunner.query(`SELECT id FROM currency`);

    for (let i = 0; i < this.products.length; i++) {
      await queryRunner.query(
        `INSERT INTO products (title, description, "categoryId", "editedAt", "isShippable", "isAuction", price, "currencyId", views, likes)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          this.products[i].title,
          this.products[i].description,
          this.products[i].categoryId,
          this.products[i].editedAt,
          this.products[i].isShippable,
          this.products[i].isAuction,
          this.products[i].price,
          currency[0].id,
          this.products[i].views,
          this.products[i].likes,
        ],
      );
    }

    const product_ids = await queryRunner.query(`SELECT id FROM products`);
    for (let i = 0; i < product_ids.length; i++) {
      for (let j = 0; j < this.products[i].images.length; j++) {
        await queryRunner.query(
          'INSERT INTO product_images ("productId", uri) VALUES ($1, $2)',
          [product_ids[i].id, this.products[i].images[j]],
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_11c482ccb03f44355d4e6e8c0d3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_images" DROP CONSTRAINT "FK_b367708bf720c8dd62fc6833161"`,
    );
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "product_images"`);
    await queryRunner.query(`DROP TABLE "currency"`);
  }
}
