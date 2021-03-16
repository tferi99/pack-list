import { IsBoolean, IsBooleanString, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UserFilterDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  username: string;

/*  @Transform(({ value }) => {
    const v = value == 'true';
    const r = { from: value, to: v };
    console.log('TRANSFORM:', r)
    return v;
  }, {})*/
  //@IsOptional()
  @IsBoolean()
  active: boolean;
}
