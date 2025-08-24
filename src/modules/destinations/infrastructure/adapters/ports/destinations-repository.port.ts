import { DestinationsCreateRequestDto } from "src/modules/destinations/application/dtos/destinations-create-request.dto";
import { DestinationsCreateResponseDto } from "src/modules/destinations/application/dtos/destinations-create-response.dto";

export abstract class DestinationsRepositoryPort {
    abstract create(request: DestinationsCreateRequestDto): Promise<DestinationsCreateResponseDto>;
}