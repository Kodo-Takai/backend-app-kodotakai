import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { DestinationsCreateUseCase } from '../../application/use-cases/commands/destinations-create.use-case';
import { DestinationsCreateRequestDto } from '../../application/dtos/destinations-create-request.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ApiErrorResponses, ApiSuccessResponse } from 'src/utils/decorators/api-swagger.decorator';
import { DestinationsCreateResponseDto } from '../../application/dtos/destinations-create-response.dto';

@Controller()
export class DestinationsController {
  constructor(private readonly createUseCase: DestinationsCreateUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo destino',
    description: 'Crea un nuevo destino con la información proporcionada.',
  })
  @ApiSuccessResponse(
    HttpStatus.CREATED,
    'Destino creado exitosamente',
    DestinationsCreateResponseDto,
  )

  @ApiErrorResponses(
    HttpStatus.BAD_REQUEST,
    HttpStatus.UNAUTHORIZED,
    HttpStatus.FORBIDDEN,
    HttpStatus.CONFLICT,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  async create(@Body() request: DestinationsCreateRequestDto) {
    return this.createUseCase.run(request);
  }
}
