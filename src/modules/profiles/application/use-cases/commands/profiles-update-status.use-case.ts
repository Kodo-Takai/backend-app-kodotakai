import { Injectable } from '@nestjs/common';
import { ProfilesUpdateStatusService } from '../../../domain/services/commands/profiles-update-status.service';
import { ProfilesUpdateResponseDto } from '../../dtos/profiles-update-response.dto';

@Injectable()
export class ProfilesUpdateStatusUseCase {
  constructor(private readonly profilesUpdateStatusService: ProfilesUpdateStatusService) {}

  async execute(id: string, status: boolean): Promise<ProfilesUpdateResponseDto> {
    return this.profilesUpdateStatusService.updateStatus(id, status);
  }
}
