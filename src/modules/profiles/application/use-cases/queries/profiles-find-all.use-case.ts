import { Injectable } from '@nestjs/common';
import { ProfilesFindAllService } from '../../../domain/services/queries/profiles-find-all.service';
import { ProfilesCreateResponseDto } from '../../dtos/profiles-create-response.dto';

@Injectable()
export class ProfilesFindAllUseCase {
  constructor(private readonly profilesFindAllService: ProfilesFindAllService) {}

  async execute(): Promise<ProfilesCreateResponseDto[]> {
    return this.profilesFindAllService.findAll();
  }
}