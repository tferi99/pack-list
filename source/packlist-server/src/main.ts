import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyValidationPipe } from './common/pipes/MyValidatorPipe';
import { ValidationOptions } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes
  const validationOpts = {
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    },
  } as ValidationOptions;

  app.useGlobalPipes(new MyValidationPipe(validationOpts));

  await app.listen(3000);
}
bootstrap();
