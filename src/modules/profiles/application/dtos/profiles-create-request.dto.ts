import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class ProfilesCreateRequestDto {
  @ApiProperty({ example: 'Juan', description: 'name del perfil' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Pérez', description: 'lastName del perfil' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'juan@mail.com', description: 'Email del perfil' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+5491112345678', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'Calle Falsa 123', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'masculino', required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ example: 'https://photo.com/imagen.jpg', required: false })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiProperty({ example: '1990-01-01', required: false })
  @IsOptional()
  @IsDateString()
  birthDate?: Date;
}