import { IsBoolean, IsBooleanString, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ToBoolean } from '../../../common/utils/to-boolean';
import { ToBooleanOld } from '../../../common/utils/to-boolean-old';

export class UserFilterDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  username: string;

  @ToBoolean()
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @ToBoolean()
  @IsBoolean()
  @IsOptional()
  admin: boolean;
}
