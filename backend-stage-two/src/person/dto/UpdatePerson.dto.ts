import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePersonDto {
  @ApiProperty({
    description: 'Name for person',
    example: 'Elon Musk II',
  })
  @IsNotEmpty()
  @IsString()
  name: string
}