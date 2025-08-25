import { Body, Controller, Get, Post, Put, Patch, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProfilesCreateRequestDto } from 'src/modules/profiles/application/dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from 'src/modules/profiles/application/dtos/profiles-create-response.dto';
import { ProfilesPaginatedResponseDto } from 'src/modules/profiles/application/dtos/profiles-paginated-response.dto';
import { ProfilesUpdateRequestDto } from 'src/modules/profiles/application/dtos/profiles-update-request.dto';
import { ProfilesUpdateResponseDto } from 'src/modules/profiles/application/dtos/profiles-update-response.dto';
import { ProfilesCreateUseCase } from 'src/modules/profiles/application/use-cases/commands/profiles-create.use-case';
import { ProfilesFindAllUseCase } from 'src/modules/profiles/application/use-cases/queries/profiles-find-all.use-case';
import { ProfilesFindPaginatedUseCase } from 'src/modules/profiles/application/use-cases/queries/profiles-find-paginated.use-case';
import { ProfilesUpdateUseCase } from 'src/modules/profiles/application/use-cases/commands/profiles-update.use-case';
import { ProfilesUpdateStatusUseCase } from 'src/modules/profiles/application/use-cases/commands/profiles-update-status.use-case';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(
    private readonly createUseCase: ProfilesCreateUseCase,
    private readonly findAllUseCase: ProfilesFindAllUseCase,
    private readonly findPaginatedUseCase: ProfilesFindPaginatedUseCase,
    private readonly updateUseCase: ProfilesUpdateUseCase,
    private readonly updateStatusUseCase: ProfilesUpdateStatusUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo perfil' })
  @ApiResponse({ status: 201, type: ProfilesCreateResponseDto })
  async create(@Body() body: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto> {
    try {
      return await this.createUseCase.execute(body);
    } catch (error) {
      if (error.code === 'P2002') { // Prisma unique constraint failed
        throw new HttpException('El email ya está registrado', HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los perfiles' })
  @ApiResponse({ status: 200, type: [ProfilesCreateResponseDto] })
  async findAll(): Promise<ProfilesCreateResponseDto[]> {
    return this.findAllUseCase.execute();
  }

  @Get('paginated')
  @ApiOperation({ summary: 'Listar perfiles paginados' })
  @ApiResponse({ status: 200, type: ProfilesPaginatedResponseDto })
  async findPaginated(
    @Query('index') index: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
  ): Promise<ProfilesPaginatedResponseDto> {
    return this.findPaginatedUseCase.execute({ index: Number(index), limit: Number(limit), search });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un perfil por UUID' })
  @ApiResponse({ status: 200, type: ProfilesUpdateResponseDto })
  async update(
    @Param('id') id: string,
    @Body() body: ProfilesUpdateRequestDto,
  ): Promise<ProfilesUpdateResponseDto> {
    return this.updateUseCase.execute(id, body);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Actualizar el estado de un perfil (activo/inactivo)' })
  @ApiResponse({ status: 200, type: ProfilesUpdateResponseDto })
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: boolean,
  ): Promise<ProfilesUpdateResponseDto> {
    return this.updateStatusUseCase.execute(id, status);
  }
}