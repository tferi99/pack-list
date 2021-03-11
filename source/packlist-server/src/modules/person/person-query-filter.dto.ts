import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class PersonQueryFilterDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  // @IsOptional()
  name: string;
}
