import { Injectable } from '@nestjs/common';
import { ProfilesFindOneService } from '../../../domain/services/queries/profiles-find-one.service';
import { ProfilesCreateResponseDto } from '../../dtos/profiles-create-response.dto';

@Injectable()
export class ProfilesFindOneUseCase {
  constructor(private readonly profilesFindOneService: ProfilesFindOneService) {}

  async execute(id: string): Promise<ProfilesCreateResponseDto> {
    return this.profilesFindOneService.findOne(id);
  }
}