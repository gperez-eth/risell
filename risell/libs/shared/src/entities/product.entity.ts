import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Auction } from './auction.entity';
import { Currency } from './currency.entity';
import { ProductImages } from './product-images.entity';
import { User } from './user.entinty';

@ObjectType()
@Entity('products')
export class Product {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.product)
  user: User;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column({ type: 'timestamptz', default: 'NOW()' })
  createdAt: Date;

  @Field(() => String)
  @Column({ type: 'timestamptz', default: 'NOW()' })
  editedAt: Date;

  @Field(() => Boolean)
  @Column()
  isShippable: boolean;

  @Field(() => Boolean)
  @Column()
  isAuction: boolean;

  @Field(() => Number)
  @Column({ type: 'integer' })
  price?: number;

  @Field(() => Currency)
  @ManyToOne(() => Currency, (currency) => currency.products)
  currency: Currency;

  @Field(() => Auction, { nullable: true })
  @OneToOne(() => Auction)
  @JoinColumn({})
  auction?: Auction;

  @Field(() => Number)
  @Column('smallint')
  views?: number;

  @Field(() => Number)
  @Column('smallint')
  likes?: number;

  @Field(() => [ProductImages])
  @OneToMany(() => ProductImages, (productImages) => productImages.product)
  images: ProductImages[];
}
