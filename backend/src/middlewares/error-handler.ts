import { Prisma } from '@generated/client.js';
import { AppError } from '@utils/AppError.js';
import { EErrors } from '@utils/types.js';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
			errorCode: err.errorCode,
		});
	}

	if (err instanceof Prisma.PrismaClientKnownRequestError) {
		if (err.code === 'P2002') {
			return res.status(409).json({
				message: 'Resource already exists',
				errorCode: EErrors.CONFLICT,
			});
		}
		if (err.code === 'P2025') {
			return res.status(404).json({
				message: 'Record not found',
				errorCode: EErrors.NOT_FOUND,
			});
		}
	}

	res.status(500).json({
		message: 'Internal server error',
		errorCode: EErrors.INTERNAL_ERROR,
	});
};
