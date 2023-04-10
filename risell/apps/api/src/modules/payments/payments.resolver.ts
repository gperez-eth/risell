import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { Bid } from '@app/shared';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PushBidArgs } from './dto';

@Resolver('Payments')
export class PaymentsResolver {
  constructor(
    @Inject('PAYMENTS_SERVICE') private readonly paymentsService: ClientProxy,
  ) {}

  @Query((returns) => Bid, { name: 'addNewBid' })
  addNewBid(@Args() args: PushBidArgs) {
    return this.paymentsService.send(
      {
        cmd: 'ms-push-bid',
      },
      { ...args },
    );
  }
}
