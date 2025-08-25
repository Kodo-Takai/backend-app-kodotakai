import { ProfilesCreateRequestDto } from '../../application/dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from '../../application/dtos/profiles-create-response.dto';

export interface IProfilesCreate {
  create(request: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto>;
}