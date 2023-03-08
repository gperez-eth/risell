import { Field, Int, ArgsType, Float } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class FetchNearestProductsArgs {
    
  @Field(() => Int)
  @Min(1)
  @Max(40)
  limit = 40;

  @Field(() => Int)
  @Min(0)
  offset = 0;

  @Field(() => Float)
  latitude;

  @Field(() => Float)
  longitude;
}