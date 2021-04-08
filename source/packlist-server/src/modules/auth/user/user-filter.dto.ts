import { IsBoolean, IsBooleanString, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ToBoolean } from '../../../common/utils/to-boolean';
import { ToBooleanOld } from '../../../common/utils/to-boolean-old';

export class UserFilterDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  username: string;

  @ToBoolean()
  //@ToBooleanOld()
  @IsBoolean()
  active: boolean;
}
