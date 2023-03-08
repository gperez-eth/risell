import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
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

  @Field(() => String)
  @Column('char', { length: 36 })
  currencyId: string;

  @Field(() => Number)
  @Column('smallint')
  views: number;

  @Field(() => Number)
  @Column('smallint')
  likes: number;

  @OneToMany(() => ProductImages, image => image.product)
  images: ProductImages[];

  @Field(() => Number)
  @Column({ type: 'numeric' })
  latitude: number;

  @Field(() => Number)
  @Column({ type: 'numeric' })
  longitude: number;
}
