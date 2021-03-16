import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyValidationPipe } from './common/pipes/MyValidatorPipe';
import { validate, ValidationOptions } from 'class-validator';
import { ValidationPipeOptions } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes
  const validationOpts = {
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    enableDebugMessages: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  } as ValidationPipeOptions;

  app.useGlobalPipes(new MyValidationPipe(validationOpts));

  await app.listen(3000);
}
bootstrap();
