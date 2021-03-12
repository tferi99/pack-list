import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class PersonFilterDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  name: string;
}
