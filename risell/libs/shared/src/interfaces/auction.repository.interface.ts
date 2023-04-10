import { Auction } from '../entities/auction.entity';
import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

export type AuctionRepositoryInterface = BaseInterfaceRepository<Auction>;
