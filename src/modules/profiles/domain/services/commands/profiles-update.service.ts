import { Inject, Injectable } from '@nestjs/common';
import { ProfilesRepositoryImpl } from 'src/modules/profiles/infrastructure/adapters/implements/profiles-repository.impl';
import { ProfilesUpdateRequestDto } from 'src/modules/profiles/application/dtos/profiles-update-request.dto';
import { ProfilesUpdateResponseDto } from 'src/modules/profiles/application/dtos/profiles-update-response.dto';

@Injectable()
export class ProfilesUpdateService {
  constructor(
    @Inject(ProfilesRepositoryImpl)
    private repo: ProfilesRepositoryImpl,
  ) {}

  update(id: string, request: ProfilesUpdateRequestDto): Promise<ProfilesUpdateResponseDto> {
    return this.repo.update(id, request);
  }
}