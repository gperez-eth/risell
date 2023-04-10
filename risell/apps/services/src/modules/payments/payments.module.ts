import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SharedModule,
  PostgresDBModule,
  SharedService,
  BidRepository,
  Bid,
  Auction,
  AuctionRepository,
} from '@app/shared';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    SharedModule,
    PostgresDBModule,
    TypeOrmModule.forFeature([Auction, Bid]),
  ],
  controllers: [PaymentsController],
  providers: [
    {
      provide: 'PaymentServiceInterface',
      useClass: PaymentsService,
    },
    {
      provide: 'BidRepositoryInterface',
      useClass: BidRepository,
    },
    {
      provide: 'AuctionRepositoryInterface',
      useClass: AuctionRepository,
    },
    {
      provide: 'SharedServiceInterface',
      useClass: SharedService,
    },
  ],
})
export class PaymentsModule {}
