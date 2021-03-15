import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ToBoolean } from '../../../common/pipes/to-boolean.func';

export class UserFilterDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  username: string;

  @ToBoolean()
  @IsOptional()
/*  @Transform(it => {
    switch (it) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return it;
    }
  })*/
  active: boolean;
}
