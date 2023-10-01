import { IsNotEmpty, IsString } from "class-validator";

export class InitiateVideoDto {
  @IsNotEmpty()
  @IsString()
  title: string
}