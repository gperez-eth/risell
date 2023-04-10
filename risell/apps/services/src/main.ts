import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { SharedService } from '@app/shared';
import { ServicesModule } from './services.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicesModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);

  const productQueue = configService.get<string>('RABBITMQ_PRODUCT_QUEUE');
  const paymentsQueue = configService.get<string>('RABBITMQ_PAYMENT_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(productQueue));
  app.connectMicroservice(sharedService.getRmqOptions(paymentsQueue));
  app.startAllMicroservices();
}
bootstrap();
