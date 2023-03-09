import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import BackendModules from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    ...BackendModules,
  ],
  controllers: [],
  providers: [],
})
export class ServicesModule {}
