import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';

@Injectable()
export class ValidationPipeWithLog extends ValidationPipe {

  /**
   * FROM PipeTransform:
   * Method to implement a custom pipe.  Called with two parameters
   *
   * @param value argument before it is received by route handler method
   * @param metadata contains metadata about the value
   */
  async transform(value: any, metatype) {
    console.log('---------------- ValidationPipeWithLog transformation ----------------');
    console.log('ValidationPipeWithLog - incoming value:', value);
    console.log('ValidationPipeWithLog - metatype for transformation:', metatype);
    let o;
    try {
      o = await super.transform(value, metatype);
    } catch (e) {
      //console.log('Error:', e);
      console.log(`Error[${e.response.statusCode}]:`, e.response.message);
      console.log('-----------------------------------------------------------------');
      throw e;
    }
    console.log('Transformed to:', o);
    console.log('-----------------------------------------------------------------');
    return o;
  }
  constructor(options?: ValidationPipeOptions) {
    super(options);
  }
}
