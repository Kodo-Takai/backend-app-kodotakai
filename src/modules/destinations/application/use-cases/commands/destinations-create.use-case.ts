import { Inject, Injectable } from '@nestjs/common';
import { DestinationsCreateService } from 'src/modules/destinations/domain/services/commands/destinations-create.service';
import * as request from 'supertest';
import { DestinationsCreateRequestDto } from '../../dtos/destinations-create-request.dto';
import { DestinationsCreateResponseDto } from '../../dtos/destinations-create-response.dto';
  
@Injectable()
export class DestinationsCreateUseCase {
    constructor(@Inject('ICreateDestination') private service: DestinationsCreateService) {}

    async run(request: DestinationsCreateRequestDto): Promise<DestinationsCreateResponseDto> {
        return this.service.create(request);

    }
}