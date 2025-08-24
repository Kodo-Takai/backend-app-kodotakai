import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export function ApiSuccessResponse(
  status: HttpStatus.OK | HttpStatus.CREATED,
  description: string,
  type?: any,
) {
  return applyDecorators(
    ApiResponse({
      status,
      description,
      type,
    }),
  );
}

export function ApiErrorResponses(...statuses: HttpStatus[]) {
  const defaultStatuses: HttpStatus[] = [
    HttpStatus.BAD_REQUEST,
    HttpStatus.UNAUTHORIZED,
    HttpStatus.FORBIDDEN,
    HttpStatus.NOT_FOUND,
    HttpStatus.CONFLICT,
    HttpStatus.INTERNAL_SERVER_ERROR,
  ];

  const finalStatuses = statuses.length > 0 ? statuses : defaultStatuses;

  const descriptions = {
    [HttpStatus.BAD_REQUEST]: 'Solicitud inválida',
    [HttpStatus.UNAUTHORIZED]: 'Acceso denegado',
    [HttpStatus.FORBIDDEN]: 'No tiene permisos para esta acción',
    [HttpStatus.NOT_FOUND]: 'Recurso no encontrado',
    [HttpStatus.CONFLICT]: 'El recurso ya existe',
    [HttpStatus.INTERNAL_SERVER_ERROR]: 'Error interno del servidor',
  };

  const responses = finalStatuses.map((status) =>
    ApiResponse({
      status,
      description: descriptions[status] || 'Error',
    }),
  );

  return applyDecorators(...responses);
}
