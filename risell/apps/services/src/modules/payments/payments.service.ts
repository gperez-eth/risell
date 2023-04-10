import {
  AuctionRepositoryInterface,
  Bid,
  BidRepositoryInterface,
  NewBidQueryDto,
} from '@app/shared';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('BidRepositoryInterface')
    private readonly bidRepository: BidRepositoryInterface,
    @Inject('AuctionRepositoryInterface')
    private readonly auctionRepository: AuctionRepositoryInterface,
  ) {}

  async pushNewBid({
    auctionId,
    userId,
    bidAmount,
  }: NewBidQueryDto): Promise<Bid> {
    const auction = await this.auctionRepository.findOneById(auctionId);

    if (auction) {
      const bid = this.bidRepository.create({
        userId: userId,
        amount: bidAmount,
        auction: auction,
        bidTime: new Date().toUTCString(),
      });

      return await this.bidRepository.save(bid);
    }
  }
}
