import { ProfilesUpdateRequestDto } from '../../application/dtos/profiles-update-request.dto';
import { ProfilesUpdateResponseDto } from '../../application/dtos/profiles-update-response.dto';

export interface IProfilesUpdate {
  update(id: string, request: ProfilesUpdateRequestDto): Promise<ProfilesUpdateResponseDto>;
}