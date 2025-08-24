import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/infrastructure/config/auth.module';
import { DestinationsModule } from './modules/destinations/infrastructure/config/destinations.module';

@Module({
  imports: [DestinationsModule, AuthModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
