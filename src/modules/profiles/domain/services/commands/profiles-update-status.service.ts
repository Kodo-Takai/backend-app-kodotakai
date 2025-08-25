import { Inject, Injectable } from '@nestjs/common';
import { ProfilesRepositoryImpl } from 'src/modules/profiles/infrastructure/adapters/implements/profiles-repository.impl';
import { ProfilesUpdateResponseDto } from 'src/modules/profiles/application/dtos/profiles-update-response.dto';

@Injectable()
export class ProfilesUpdateStatusService {
  constructor(
    @Inject(ProfilesRepositoryImpl)
    private repo: ProfilesRepositoryImpl,
  ) {}

  updateStatus(id: string, status: boolean): Promise<ProfilesUpdateResponseDto> {
    return this.repo.updateStatus(id, status);
  }
}
