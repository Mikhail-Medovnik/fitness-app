import { prisma } from '@config/prisma.js';
import { NotFoundError } from '@utils/errors.js';
import { Request, Response } from 'express';

// @desc register user
// @access Public
// @route api/login
export const authUser = async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			id: 100,
		},
	});

	console.log(user);

	if (!user) {
		throw NotFoundError('User not found');
	}

	res.json({ message: 'You are authenticated', user });
};

// @desc register user
// @access Public
// @route api/register
export const registerUser = async (req: Request, res: Response) => {
	res.json(req.body);
};
