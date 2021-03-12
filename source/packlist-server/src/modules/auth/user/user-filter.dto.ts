import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UserFilterDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;
}
