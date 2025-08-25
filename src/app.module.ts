import { ProfilesModule } from './modules/profiles/infrastructure/config/profiles.module';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/infrastructure/config/auth.module';
import { DestinationsModule } from './modules/destinations/infrastructure/config/destinations.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [ProfilesModule, 
    DestinationsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
