import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeWithLog } from './common/pipes/validator-pipe-with-log';
import { validate, ValidationOptions } from 'class-validator';
import { ValidationPipeOptions } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes
  const validationOpts = {
    // true: controller input JSON transformed into object type
    // false: controller input JSON won't be transformed into class, it's still JSON but primitive members are tansformed
    transform: true,

    // true: validator will strip validated (returned) object of any properties that do not use any validation decorators
    whitelist: true,

    // true: instead of stripping non-whitelisted properties validator will throw an exception.
    forbidNonWhitelisted: true,

    enableDebugMessages: true,

    skipMissingProperties: false,

    transformOptions: {
      enableImplicitConversion: true,
    },
  } as ValidationPipeOptions;

  app.useGlobalPipes(new ValidationPipeWithLog(validationOpts));

  await app.listen(3000);
}
bootstrap();
