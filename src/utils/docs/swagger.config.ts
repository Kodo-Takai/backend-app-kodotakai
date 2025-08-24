import { SwaggerConfig } from "./swagger.interface";


export const SWAGGER_CONFIG: SwaggerConfig = {
  title: process.env.SWAGGER_TITLE || '',
  description: process.env.SWAGGER_DESCRIPTION || '',
  version: process.env.SWAGGER_VERSION || '',
  tags: [],
  route: process.env.SWAGGER_ROUTE || '',
  servers: [process.env.SWAGGER_SERVER || ''],
};
