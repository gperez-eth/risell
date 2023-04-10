import { Field, Int, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsInt } from 'class-validator';

@ArgsType()
export class PushBidArgs {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  auctionId;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  userId;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  bidAmount;
}
