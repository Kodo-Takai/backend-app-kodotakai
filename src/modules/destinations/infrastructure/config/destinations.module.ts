import { Module } from '@nestjs/common';
import { DestinationsController } from '../controllers/destinations.controller';
import { PrismaService } from 'prisma/prisma.service';
import { DestinationsCreateService } from '../../domain/services/commands/destinations-create.service';
import { DestinationsCreateUseCase } from '../../application/use-cases/commands/destinations-create.use-case';
import { DestinationsRepositoryImpl } from '../adapters/implements/destinations-repository.impl';

@Module({
  imports: [],
  controllers: [DestinationsController],
  providers: [
    PrismaService,
    {
      provide: 'ICreateDestination',
      useClass: DestinationsCreateService,
    },

    //Use cases
    DestinationsCreateUseCase,

    //repositories binding

    DestinationsRepositoryImpl,
    {
      provide: 'DestinationsRepository',
      useClass: DestinationsRepositoryImpl,
    }
  ],
})
export class DestinationsModule {}