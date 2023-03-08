import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@ObjectType()
@Entity('currency')
export class Currency {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('char', { length: 3 })
  currency_code: string;

  @Field(() => String)
  @Column('char', { length: 1 })
  currency_symbol: string;

  @OneToMany(() => Product, (product) => product.currency)
  products: Product[];

}
