import { CorrelationIdMiddleware, LoggerApi } from '@app/shared';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: __dirname + '/graphql/schema.graphql',
      sortSchema: true,
    }),
    LoggerApi,
    ProductsModule,
    PaymentsModule,
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
