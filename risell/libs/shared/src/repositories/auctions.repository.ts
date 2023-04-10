import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Auction } from '../entities/auction.entity';
import { AuctionRepositoryInterface } from '../interfaces/auction.repository.interface';

@Injectable()
export class AuctionRepository
  extends BaseAbstractRepository<Auction>
  implements AuctionRepositoryInterface
{
  constructor(
    @InjectRepository(Auction)
    private readonly AuctionRepository: Repository<Auction>,
  ) {
    super(AuctionRepository);
  }
}
