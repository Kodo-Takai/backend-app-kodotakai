import { DestinationsCreateRequestDto } from '../../application/dtos/destinations-create-request.dto';
import { DestinationsCreateResponseDto } from '../../application/dtos/destinations-create-response.dto';
export interface IDestinationsCreate {
    create(request:DestinationsCreateRequestDto): Promise<DestinationsCreateResponseDto>;
}