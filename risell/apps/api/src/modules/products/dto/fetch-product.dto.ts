import { Field, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class FetchProductArgs {
  @Field(() => String)
  @IsNotEmpty()
  productId: string;
}
