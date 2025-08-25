import { Injectable } from '@nestjs/common';
import { ProfilesCreateService } from '../../../domain/services/commands/profiles-create.service';
import { ProfilesCreateRequestDto } from '../../dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from '../../dtos/profiles-create-response.dto';

@Injectable()
export class ProfilesCreateUseCase {
  constructor(private readonly profilesCreateService: ProfilesCreateService) {}

  async execute(request: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto> {
    return this.profilesCreateService.create(request);
  }
}