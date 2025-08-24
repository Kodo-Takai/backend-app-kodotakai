import { HttpStatus, Injectable } from '@nestjs/common';
import { DestinationsRepositoryPort } from '../ports/destinations-repository.port';
import { DestinationsCreateRequestDto } from 'src/modules/destinations/application/dtos/destinations-create-request.dto';
import { DestinationsCreateResponseDto } from 'src/modules/destinations/application/dtos/destinations-create-response.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DestinationsRepositoryImpl implements DestinationsRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    request: DestinationsCreateRequestDto,
  ): Promise<DestinationsCreateResponseDto> {
    await this.prisma.destinations.create({
      data: {
        ...request,
        createdAt: new Date(),
        updatedAt: null,
      },
    });
    return {
      status_code: HttpStatus.CREATED,
      message: 'Destination created successfully',
    };
  }
}

