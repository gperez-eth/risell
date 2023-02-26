import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ApiModule } from './api.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    // it is applied to every route handler across the entire application
    new ValidationPipe({
      // Cast automaticaly class-transform
      transform: true, // If true, it allows to transform the flat JSON objects to objects of the DTO class.
      forbidUnknownValues: true, // Setting true will cause fail validation of unknown objects.
      forbidNonWhitelisted: true, // If set to true, instead of stripping non-whitelisted properties validator will throw an error
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder() // RESTful web services documentation
    .setTitle('Risell')
    .setDescription('Risell docs')
    .setVersion('1.0')
    .addTag('risell')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(ApiModule.port);
}
bootstrap();
