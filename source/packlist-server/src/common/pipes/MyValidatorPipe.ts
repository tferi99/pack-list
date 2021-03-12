import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';

@Injectable()
export class MyValidationPipe extends ValidationPipe {
  async transform(value: any, metatype) {
    console.log('MyValidationPipe value:', value);
    console.log('MyValidationPipe metatype:', metatype);
    return super.transform(value, metatype);
  }
  constructor(options?: ValidationPipeOptions) {
    super(options);
  }
}
