import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, isNumber, IsString } from 'class-validator';

export class DestinationsCreateRequestDto {
  
  @IsString()
  @ApiProperty(
    {
      example: 'Playa Paraiso',
      description: 'Nombre del destino',
      type: String,
      required: true,
    },
  )
  name: string;

  @IsString()
  @ApiProperty(
    {
      example: 'Una hermosa playa con aguas cristalinas y arena blanca.',
      description: 'Descripción del destino',
      type: String,
      required: true,
    },
  )
  description: string;

  @IsString()
  @ApiProperty(
    {
      example: 'Ubicación del destino',
      description: 'Ubicación del destino',
      type: String,
      required: true,
    },
  )
  location: string;

  @IsNumber()
  @ApiProperty(
    {
      example: 21.1619,
      description: 'Latitud del destino',
      type: Number,
      required: true,
    },
  )
  latitude: number;

  @IsNumber()
  @ApiProperty(
    {
      example: -86.8515,
      description: 'Longitud del destino',
      type: Number,
      required: true,
    },
  )
  longitude: number;
}
