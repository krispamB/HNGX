import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonDto {
  @ApiProperty({
    description: 'Name for person',
    example: 'Elon Musk',
  })
  @IsNotEmpty()
  @IsString()
  name: string
}