import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const APP_PORT = 3001;

async function bootstrap() {
  const log = new Logger('main');

  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  // activate global validation
  app.useGlobalPipes(new ValidationPipe());

  log.debug('Listening on: ' + APP_PORT);
  await app.listen(APP_PORT);
}
bootstrap();
