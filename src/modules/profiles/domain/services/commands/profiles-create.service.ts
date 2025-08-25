import { Inject, Injectable } from '@nestjs/common';
import { IProfilesCreate } from '../../interfaces/profiles-create.interface';
import { ProfilesCreateRequestDto } from 'src/modules/profiles/application/dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from 'src/modules/profiles/application/dtos/profiles-create-response.dto';
import { ProfilesRepositoryPort } from 'src/modules/profiles/infrastructure/adapters/ports/profiles-repository.port';

@Injectable()
export class ProfilesCreateService implements IProfilesCreate {
  constructor(
    @Inject('ProfilesRepository')
    private repo: ProfilesRepositoryPort,
  ) {}

  create(request: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto> {
    return this.repo.create(request);
  }
}