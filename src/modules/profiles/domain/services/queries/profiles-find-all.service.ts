import { Inject, Injectable } from '@nestjs/common';
import { ProfilesRepositoryImpl } from 'src/modules/profiles/infrastructure/adapters/implements/profiles-repository.impl';
import { ProfilesCreateResponseDto } from 'src/modules/profiles/application/dtos/profiles-create-response.dto';

@Injectable()
export class ProfilesFindAllService {
  constructor(
    @Inject(ProfilesRepositoryImpl)
    private repo: ProfilesRepositoryImpl,
  ) {}

  findAll(): Promise<ProfilesCreateResponseDto[]> {
    return this.repo.findAll();
  }
}