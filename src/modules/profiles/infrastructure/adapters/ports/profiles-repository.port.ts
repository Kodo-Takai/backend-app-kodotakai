import { ProfilesCreateRequestDto } from 'src/modules/profiles/application/dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from 'src/modules/profiles/application/dtos/profiles-create-response.dto';

export class ProfilesRepositoryPort {
  create(request: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto> {
    throw new Error('Method not implemented.');
  }
}