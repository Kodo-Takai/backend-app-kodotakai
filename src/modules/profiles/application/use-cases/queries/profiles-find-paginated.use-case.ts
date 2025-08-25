import { Injectable } from '@nestjs/common';
import { ProfilesFindPaginatedService } from '../../../domain/services/queries/profiles-find-paginated.service';
import { ProfilesPaginatedResponseDto } from '../../dtos/profiles-paginated-response.dto';

@Injectable()
export class ProfilesFindPaginatedUseCase {
  constructor(private readonly profilesFindPaginatedService: ProfilesFindPaginatedService) {}

  async execute(params: { index: number; limit: number; search?: string }): Promise<ProfilesPaginatedResponseDto> {
    return this.profilesFindPaginatedService.findPaginated(params);
  }
}
