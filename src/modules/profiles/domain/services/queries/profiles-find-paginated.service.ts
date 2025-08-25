import { Inject, Injectable } from '@nestjs/common';
import { ProfilesRepositoryImpl } from 'src/modules/profiles/infrastructure/adapters/implements/profiles-repository.impl';
import { ProfilesPaginatedResponseDto } from 'src/modules/profiles/application/dtos/profiles-paginated-response.dto';

@Injectable()
export class ProfilesFindPaginatedService {
  constructor(
    @Inject(ProfilesRepositoryImpl)
    private repo: ProfilesRepositoryImpl,
  ) {}

  findPaginated(params: { index: number; limit: number; search?: string }): Promise<ProfilesPaginatedResponseDto> {
    return this.repo.findPaginated(params);
  }
}
