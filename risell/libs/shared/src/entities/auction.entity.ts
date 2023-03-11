import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bid } from './bid.entity';
import { Product } from './product.entity';

@ObjectType()
@Entity('auction')
export class Auction {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Product)
  @ManyToOne(() => Product, (product) => product.auction)
  product: Product;

  @Field(() => String)
  @Column({ type: 'timestamptz', default: 'NOW()' })
  expirationTime: string;

  @Field(() => Boolean)
  @Column()
  isEnded: boolean;

  @Field(() => [Bid])
  @OneToMany(() => Bid, (bid) => bid.auction)
  bids?: Bid[];
}
