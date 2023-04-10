import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Bid } from '../entities/bid.entity';
import { BidRepositoryInterface } from '../interfaces/bid.repository.interface';

@Injectable()
export class BidRepository
  extends BaseAbstractRepository<Bid>
  implements BidRepositoryInterface
{
  constructor(
    @InjectRepository(Bid)
    private readonly BidRepository: Repository<Bid>,
  ) {
    super(BidRepository);
  }
}
