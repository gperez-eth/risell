import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsController } from './products.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'RABBIT_SERVICE_PRODUCTS',
      useFactory: (configService: ConfigService) => {
        const queue_input = configService.get<string>('PRODUCTS_QUEUE_INPUT');
        const host = configService.get<string>('PRODUCTS_HOST');
        const user = configService.get<string>('RABBITMQ_DEFAULT_USER');
        const password = configService.get<string>('RABBITMQ_DEFAULT_PASS');
        const port = parseInt(configService.get<string>('PRODUCTS_PORT'));

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${user}:${password}@${host}:${port}`],
            //urls: [`amqp://${host}:${port}`],
            queue: `${queue_input}`,
            queueOptions: {
              durable: true, //persistent
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class ProductsModule {}
