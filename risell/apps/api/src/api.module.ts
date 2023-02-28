import { CorrelationIdMiddleware, LoggerApi } from '@app/shared';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    LoggerApi,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule implements NestModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    ApiModule.port = +this.configService.get<number>('PORT_APP');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
