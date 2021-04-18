import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeWithLog } from './common/pipes/validator-pipe-with-log';
import { validate, ValidationOptions } from 'class-validator';
import { Logger, ValidationPipeOptions } from '@nestjs/common';
import { ConfigReader } from 'neconfig';

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

  const log = new Logger('main');
  app.useGlobalPipes(new ValidationPipeWithLog(validationOpts));
  app.enableCors();

  // reading config from .env or from environment
  const config = app.get(ConfigReader);
  const port = config.getIntOrThrow('PORT');

  log.debug('Listening on: ' + port);
  await app.listen(port);
}
bootstrap();
