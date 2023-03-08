import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';
import { Currency } from './currency.entity';
import { ProductImages } from './product-images.entity';


@ObjectType()
@Entity('products')
export class Product {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column('char', { length: 36 })
  categoryId: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: string;

  @Field(() => String)
  @Column()
  editedAt: string;

  @Field(() => Boolean)
  @Column()
  isShippable: boolean;

  @Field(() => Boolean)
  @Column()
  isAuction: boolean;

  @Field(() => Number)
  @Column({ type: 'bigint' })
  price: bigint;

  @Field(() => Currency)
  @ManyToOne(() => Currency, (currency) => currency.products)
  currency: Currency;

  @Field(() => Number)
  @Column('smallint')
  views: number;

  @Field(() => Number)
  @Column('smallint')
  likes: number;

  @Field(() => [ProductImages])
  @OneToMany(() => ProductImages, (productImages) => productImages.product)
  images: ProductImages[];
}
