import { MigrationInterface, QueryRunner } from 'typeorm';

export class initdb1681264303109 implements MigrationInterface {
  transaction?: boolean;
  name = 'initdb1681264303109';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "avatar" character varying NOT NULL DEFAULT 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEVWHj8BAfs3+qkAAP9ZHycQBvFYHzZBF5NXHjxZHytSHVMhC9w17683+6hKGnZXHjk5/6QVX+tWGT5YADVXCzs58KNMiGxUO0lXEzxXADhDwIkqvshQZlsNAPQ2/6o4FK1AFpddIAAy5LUz97NNYmtTE1FTAE5AuJNTak5ZFCdaACEUW+wfJt8gAN4wvrxEGItBCJVIaXtbIBpPHGImDdRTI1GELHSgAAACnklEQVR4nO3d21LiQBSF4UhAwOEo4kQkEcWzIh7f/9XmCfaaqkXoisX/3/emv9Irmq7Osrh25+h31GkLhQphY0KIsPkhRNj8ECJsfggRNj+ECJsfQoTNDyHC5ocQYfPTwnbcdZn/jsprocg6ceXNIGx9e3cSdf+wjheK1g/34cy7WzHzphSKTPzx80E1jKqWRS9qtojXqarFLJxZLMVeBrlQaOGwFTVcFuE//sWiCtepqsVFOLNYir0gRIgQIUKECBEiRIgQIUKECBEiRIgQIcJdhfNJWPX41I96toXP4cynxyrezNwVHr1M417/hG3eTOHbJh76KvbyohBSqFJnQZcTSzi5VEPdjdpC0Q7CPewGoRNChPWG0AkhwnpD6IQQYb0hdEKIsN4QOiFEWG8InRAirLfM/ZpZfuddednfeat1WTduW4qZV/G6949zr4/3eOiVIJZbociO4z7FraB81I8XFmdeRTyyPxLCzqdQhAd2mb73lI/GamntjaVwHze7ENYdQi+EKUPohTBlCL0QpgyhF8KUIfRCmDKEXghThtALYcoQeiFMGUIvhClD6IUwZQi9EKYMoRfClCH0QpgyhF4IU4bQC2HKEHohTBlCr0MXit/q98wP7Lm/1d+LUNy3WH15xN7XyrtvsZ9XWNQ1lZW85BB2vDLvzCR/ZybvmsKuee8JIUKECBEiRIgQIUKECBEiRIgQIUKECBHuKnTf5faFXqUr7H/Hz02oNlvvXGq8Fe9bqL77pjALXwz5T+7B29j9QBdIRERERERERERERAfTqaiXOrUZG/hX9HOSth+1GZc4a7WGUdXUPCdym1bhXlqtmSucizdhpt5Rn91UvF0zR4gQIUKECBEiRIgQIUKECBEiRIgQIUKECA9B+A9kkyupqTa+1QAAAABJRU5ErkJggg==', "location" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bid" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "bidTime" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" integer NOT NULL, "auctionId" uuid, CONSTRAINT "PK_0cdfb69539712b75b07c5fbf19a" PRIMARY KEY ("id", "userId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "auction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "expirationTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()', CONSTRAINT "PK_9dc876c629273e71646cf6dfa67" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "currency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "currency_code" character(3) NOT NULL, "currency_symbol" character(1) NOT NULL, CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uri" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_1974264ea7265989af8392f63a1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()', "editedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()', "isShippable" boolean NOT NULL, "isAuction" boolean NOT NULL, "price" integer NOT NULL, "views" smallint NOT NULL, "likes" smallint NOT NULL, "userId" uuid, "currencyId" uuid, "categoryId" uuid, "auctionId" uuid, CONSTRAINT "REL_b71f0d527143c2cb9e5530d297" UNIQUE ("auctionId"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "bid" ADD CONSTRAINT "FK_b0f254bd6d29d3da2b6a8af262b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bid" ADD CONSTRAINT "FK_2e00b0f268f93abcf693bb682c6" FOREIGN KEY ("auctionId") REFERENCES "auction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_images" ADD CONSTRAINT "FK_b367708bf720c8dd62fc6833161" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_99d90c2a483d79f3b627fb1d5e9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_11c482ccb03f44355d4e6e8c0d3" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_b71f0d527143c2cb9e5530d297d" FOREIGN KEY ("auctionId") REFERENCES "auction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `INSERT INTO public.currency VALUES ('2763de19-9719-415d-af6e-8157cac9da59', 'EUR', '€');`,
    );

    await queryRunner.query(
      `INSERT INTO public.category VALUES ('9eac6aa9-4a97-4763-8c6e-1b6099ce555f', 'CARS', 'CAR');
      INSERT INTO public.category VALUES ('3ad5dc88-1fef-4bb9-96b6-5e4e70d822f8', 'REALESTATE', 'REALESTATE');
      INSERT INTO public.category VALUES ('5dfcf853-a8ad-4578-826b-0624a94dd300', 'FASHION', 'FASHION');
      INSERT INTO public.category VALUES ('fa404cdf-eebf-4bd9-8642-7c683ae155b9', 'HIFI', 'HIFI');
      INSERT INTO public.category VALUES ('9dc0e1d4-3263-44f9-bbef-9b4827b3af69', 'PHONES', 'PHONE');
      INSERT INTO public.category VALUES ('7e6ccb51-ed4e-4997-9f1a-a40a76c88eb2', 'TECH', 'TECH');
      INSERT INTO public.category VALUES ('8761618e-cbff-4c6b-9ca9-7078d892bfaa', 'SPORTS', 'SPORT');
      INSERT INTO public.category VALUES ('233e648e-2b10-4c5a-94be-5efe4c08a815', 'APPLIANCE', 'APPLIANCE');
      INSERT INTO public.category VALUES ('25536d72-dd8a-4900-a5f3-caf7348b98a2', 'MEDIA', 'MEDIA');
      INSERT INTO public.category VALUES ('6d9211bc-2d15-4f84-9a66-721999913f95', 'VIDEOGAMES', 'VIDEOGAME');
      `,
    );

    await queryRunner.query(
      `INSERT INTO public."user" VALUES ('f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', 'xguize', 'https://mirror-media.imgix.net/publication-images/qQzKTdeH5Vc95I-VgsK8i.PNG?h=3071&w=3072', '41.3790068,2.1400042');`,
    );

    await queryRunner.query(
      `
                    INSERT INTO public.auction VALUES ('a54aa955-12dd-4a8a-9690-afb1675f425b', '2023-03-15 17:24:51');
                    INSERT INTO public.auction VALUES ('9304d7c3-4de8-4d46-84b5-c39bfb0868fe', '2023-03-14 17:24:51');
                    INSERT INTO public.auction VALUES ('2ebe20d6-d7b6-4103-8442-7752bdf6b070', '2023-03-13 17:24:51');
                  `,
    );

    await queryRunner.query(
      `
                    INSERT INTO public.products VALUES ('68485e59-6f6d-458a-ad89-598b71917533', 'Pokemon Zafiro GBA Pal ESP', 'Descripción del producto 1', '2023-03-09 08:10:29.283261', '2023-03-09 08:10:29.283261', true, true, 20939, 50, 10, 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2763de19-9719-415d-af6e-8157cac9da59', '6d9211bc-2d15-4f84-9a66-721999913f95', 'a54aa955-12dd-4a8a-9690-afb1675f425b');
                    INSERT INTO public.products VALUES ('ce1bedc2-1a7a-4b37-8f2a-4bcd44822be2', '3DS XL Pikachu Edition', 'Descripción del producto 2', '2023-03-09 08:10:29.283261', '2023-03-09 08:10:29.283261', true, false, 20939, 50, 10, 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2763de19-9719-415d-af6e-8157cac9da59');
                    INSERT INTO public.products VALUES ('26e90ed4-027c-42dd-9639-a0f324a1a6dc', 'Pokemon Cristal GBC precintado', 'Descripción del producto 3', '2023-03-09 08:10:29.283261', '2023-03-09 08:10:29.283261', true, true, 12334, 231, 88, 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2763de19-9719-415d-af6e-8157cac9da59', '6d9211bc-2d15-4f84-9a66-721999913f95', '9304d7c3-4de8-4d46-84b5-c39bfb0868fe');
                    INSERT INTO public.products VALUES ('a0317385-9d67-4304-a0ea-74583c0d97c1', 'Xenoblade Chronicles 3 Switch en perfecto estado', 'Descripción del producto 4', '2023-03-09 08:10:29.283261', '2023-03-09 08:10:29.283261', true, true, 9343, 872, 123, 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2763de19-9719-415d-af6e-8157cac9da59', '6d9211bc-2d15-4f84-9a66-721999913f95', '2ebe20d6-d7b6-4103-8442-7752bdf6b070');
                    INSERT INTO public.products VALUES ('d59a6d42-f0e6-4a2e-a3c0-ac24855fada5', 'Xbox Series X EDICION HALO', 'Descripción del producto 5', '2023-03-09 08:10:29.283261', '2023-03-09 08:10:29.283261', false, false, 12334, 200, 55, 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2763de19-9719-415d-af6e-8157cac9da59');
                `,
    );

    await queryRunner.query(
      `INSERT INTO public.bid VALUES ('ff451310-ba7b-4512-a5cb-d230fa283dfc', 'f23b6bc8-24ed-4a08-8ecd-dc6b0fc5a404', '2023-03-11 17:24:51', 20000, 'a54aa955-12dd-4a8a-9690-afb1675f425b');`,
    );

    await queryRunner.query(
      `
                    INSERT INTO public.product_images VALUES ('1cef144e-3aa3-495d-9ab3-4d1d90ae5710', 'https://cdn.wallapop.com/images/10420/e9/ab/__/c10420p862124545/i3060005077.jpg?pictureSize=W640', '68485e59-6f6d-458a-ad89-598b71917533');
                    INSERT INTO public.product_images VALUES ('9be9dba4-93f8-4461-9650-06a3f9da45aa', 'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047082.jpg?pictureSize=W640', '68485e59-6f6d-458a-ad89-598b71917533');
                    INSERT INTO public.product_images VALUES ('955efbb1-90e3-481d-b834-127eed0a41a2', 'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047096.jpg?pictureSize=W640', '68485e59-6f6d-458a-ad89-598b71917533');
                    INSERT INTO public.product_images VALUES ('6d463bbc-555a-431e-b5f4-0039161d3b38', 'https://cdn.wallapop.com/images/10420/e3/an/__/c10420p852061874/i3002047088.jpg?pictureSize=W640', '68485e59-6f6d-458a-ad89-598b71917533');
                    INSERT INTO public.product_images VALUES ('387542ec-4c45-4a78-9b45-d8cf5d462a72', 'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/00/00bbd7e3-df27-4d5a-a306-956557e3cd31?rule=$_59.JPG', 'ce1bedc2-1a7a-4b37-8f2a-4bcd44822be2');
                    INSERT INTO public.product_images VALUES ('83f8c447-b738-44e7-9ee4-51b95538e413', 'https://cdn.wallapop.com/images/10420/de/ui/__/c10420p810998034/i2793715903.jpg?pictureSize=W640', '26e90ed4-027c-42dd-9639-a0f324a1a6dc');
                    INSERT INTO public.product_images VALUES ('2d8c5a3c-0f57-4c40-b977-99afff78145a', 'https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640', 'a0317385-9d67-4304-a0ea-74583c0d97c1');
                    INSERT INTO public.product_images VALUES ('bcd07ed9-6fc1-4dfd-8dd3-f3dff1fa8c46', 'https://cdn.wallapop.com/images/10420/e8/nv/__/c10420p861076772/i3054684992.jpg?pictureSize=W640', 'd59a6d42-f0e6-4a2e-a3c0-ac24855fada5');
                `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_b71f0d527143c2cb9e5530d297d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_11c482ccb03f44355d4e6e8c0d3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_99d90c2a483d79f3b627fb1d5e9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_images" DROP CONSTRAINT "FK_b367708bf720c8dd62fc6833161"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bid" DROP CONSTRAINT "FK_2e00b0f268f93abcf693bb682c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bid" DROP CONSTRAINT "FK_b0f254bd6d29d3da2b6a8af262b"`,
    );
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "product_images"`);
    await queryRunner.query(`DROP TABLE "currency"`);
    await queryRunner.query(`DROP TABLE "auction"`);
    await queryRunner.query(`DROP TABLE "bid"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
