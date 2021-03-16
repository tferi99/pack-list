import { IsBoolean, IsBooleanString, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional } from 'class-validator';
import { ToBoolean } from '../../common/pipes/to-boolean.func';
import { Transform } from 'class-transformer';

export class PersonFilterDto {
  @IsOptional()
  @IsNumber()
  //@IsNumberString()
  id: number;

  @IsOptional()
  name: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  test: boolean;
}
