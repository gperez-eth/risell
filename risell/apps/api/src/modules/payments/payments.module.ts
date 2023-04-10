import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PaymentsResolver } from './payments.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule.registerRmq(
      'PAYMENTS_SERVICE',
      process.env.RABBITMQ_PAYMENT_QUEUE,
    ),
  ],
  providers: [PaymentsResolver],
})
export class PaymentsModule {}
