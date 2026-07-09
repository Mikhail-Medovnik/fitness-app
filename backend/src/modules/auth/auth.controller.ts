import { prisma } from '@config/prisma.js';
import { Request, Response } from 'express';

export const authUser = async (req: Request, res: Response) => {
	const user = await prisma.user.findMany();
	res.json({ message: 'You are authenticated', user });
};
