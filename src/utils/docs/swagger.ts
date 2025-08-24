import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';
import { SWAGGER_CONFIG } from './swagger.config';

const SWAGGER_ENVS = ['local', 'development'];

export function configureSwagger(app: INestApplication): void {
  const configService = app.get(ConfigService);
  const nodeEnv = configService.get<string>('NODE_ENV');

  if (!nodeEnv || !SWAGGER_ENVS.includes(nodeEnv)) {
    return;
  }

  const swaggerRoute = configService.get<string>('SWAGGER_ROUTE', '/docs');


  const options = new DocumentBuilder()
    .setTitle(
      configService.get<string>('SWAGGER_TITLE', SWAGGER_CONFIG.title) ??
        SWAGGER_CONFIG.title,
    )
    .setDescription(
      configService.get<string>(
        'SWAGGER_DESCRIPTION',
        SWAGGER_CONFIG.description,
      ) ?? SWAGGER_CONFIG.description,
    )
    .setVersion(
      configService.get<string>('SWAGGER_VERSION', SWAGGER_CONFIG.version) ??
        SWAGGER_CONFIG.version,
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    );
  const serversEnv = configService.get<string>(
    'SWAGGER_SERVERS',
    'http://localhost:3000',
  );
  const servers = serversEnv.split(',').filter((url) => url.trim() !== '');

  servers.forEach((url, index) => {
    options.addServer(url, `Server ${index + 1}`);
  });

  const document = SwaggerModule.createDocument(app, options.build(), {
    include: [AppModule],
    deepScanRoutes: true,
    ignoreGlobalPrefix: false,
  });

  

  SwaggerModule.setup(swaggerRoute, app, document, {
    useGlobalPrefix: false,
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
}
