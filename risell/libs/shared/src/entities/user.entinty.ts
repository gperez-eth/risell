import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bid } from './bid.entity';
import { Product } from './product.entity';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [Product])
  @OneToMany(() => Product, (product) => product.user)
  product?: Product[];

  @Field(() => [Bid])
  @OneToMany(() => Bid, (bid) => bid.user)
  bids?: Bid[];
}
