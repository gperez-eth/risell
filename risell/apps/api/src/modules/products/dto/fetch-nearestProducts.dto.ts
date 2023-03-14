import { Field, Int, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty, Max, Min } from 'class-validator';

@ArgsType()
export class FetchNearestProductsArgs {
  @Field(() => Int)
  @Min(1)
  @Max(40)
  limit = 40;

  @Field(() => Int)
  @Min(0)
  offset = 0;

  @Field(() => String)
  @IsNotEmpty()
  location;
}
