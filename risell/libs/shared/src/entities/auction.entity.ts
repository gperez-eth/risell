import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @Field(() => String)
  @Column({ type: 'timestamptz', default: 'NOW()' })
  expirationTime: string;

  @Field(() => [Bid])
  @OneToMany(() => Bid, (bid) => bid.auction)
  bids?: Bid[];
}
