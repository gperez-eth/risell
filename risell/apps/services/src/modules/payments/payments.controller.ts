import { NewBidQueryDto, SharedService } from '@app/shared';
import { Controller, Inject } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(
    @Inject('PaymentServiceInterface')
    private readonly paymentsService: PaymentsService,
    @Inject('SharedServiceInterface')
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'ms-push-bid' })
  async addNewBid(@Ctx() context: RmqContext, @Payload() data: NewBidQueryDto) {
    this.sharedService.acknowledgeMessage(context);
    return await this.paymentsService.pushNewBid(data);
  }
}
