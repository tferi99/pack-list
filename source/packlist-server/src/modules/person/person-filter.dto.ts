import { IsBoolean, IsBooleanString, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional } from 'class-validator';
import { ToBoolean } from '../../common/pipes/to-boolean.func';

export class PersonFilterDto {
  //@IsOptional()
  @IsNumber()
  //@IsNumberString()
  id: number;

//  @IsOptional()
  name: string;

//  @IsOptional()
  //@IsBoolean()
  test: boolean;
}
