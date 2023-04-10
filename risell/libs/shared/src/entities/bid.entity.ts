import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Auction } from './auction.entity';
import { User } from './user.entinty';

@ObjectType()
@Entity('bid')
export class Bid {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  userId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.bids)
  user: User;

  @PrimaryColumn()
  @Field(() => String)
  @Column({ type: 'timestamptz' })
  bidTime: string;

  @Field(() => Number)
  @Column({ type: 'integer' })
  amount: number;

  @Field(() => Auction)
  @ManyToOne(() => Auction, (auction) => auction.bids)
  auction: Auction;
}
