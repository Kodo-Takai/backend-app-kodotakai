import { Inject, Injectable } from '@nestjs/common';
import { IDestinationsCreate } from '../../interfaces/destinations-create.interface';
import { DestinationsCreateRequestDto } from 'src/modules/destinations/application/dtos/destinations-create-request.dto';
import { DestinationsCreateResponseDto } from 'src/modules/destinations/application/dtos/destinations-create-response.dto';
import { DestinationsRepositoryPort } from 'src/modules/destinations/infrastructure/adapters/ports/destinations-repository.port';
  
@Injectable()
export class DestinationsCreateService implements IDestinationsCreate {
  constructor(
    @Inject('DestinationsRepository')
    private repo: DestinationsRepositoryPort,
  ) {}

  create(
    request: DestinationsCreateRequestDto,
  ): Promise<DestinationsCreateResponseDto> {
    return this.repo.create(request);
  }
}