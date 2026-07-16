import { AppError } from './AppError.js';

export const NotFoundError = (message = 'Resource not found') => new AppError(404, 'NOT_FOUND', message);

export const ValidationError = (message = 'Validation failed') => new AppError(400, 'VALIDATION_ERROR', message);

export const UnauthorizedError = (message = 'Unauthorized') => new AppError(401, 'UNAUTHORIZED', message);

export const ConflictError = (message = 'Resource already exists') => new AppError(409, 'CONFLICT', message);
