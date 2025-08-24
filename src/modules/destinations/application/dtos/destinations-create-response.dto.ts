import { ApiProperty } from "@nestjs/swagger";

export class DestinationsCreateResponseDto {
  @ApiProperty()
  status_code: number;

  @ApiProperty()
  message: string;
}
