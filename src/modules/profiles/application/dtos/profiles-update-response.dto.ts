import { ApiProperty } from '@nestjs/swagger';

export class ProfilesUpdateResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  address?: string;

  @ApiProperty({ required: false })
  gender?: string;

  @ApiProperty({ required: false })
  photo?: string;

  @ApiProperty({ required: false })
  birthDate?: Date;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  updatedAt?: Date;
}