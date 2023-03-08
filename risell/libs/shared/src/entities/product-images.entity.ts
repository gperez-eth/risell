import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';

import { Product } from './product.entity';

@ObjectType()
@Entity('product_images')
export class ProductImages {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;

  @Field(() => String)
  @Column()
  uri: string;
}
