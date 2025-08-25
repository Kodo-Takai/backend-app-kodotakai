import { ApiProperty } from '@nestjs/swagger';
import { ProfilesCreateResponseDto } from './profiles-create-response.dto';

export class ProfilesPaginatedResponseDto {
  @ApiProperty({ type: [ProfilesCreateResponseDto] })
  items: ProfilesCreateResponseDto[];

  @ApiProperty({ example: 1 })
  currentPage: number;

  @ApiProperty({ example: 10 })
  totalPages: number;

  @ApiProperty({ example: 100 })
  totalItems: number;
}
