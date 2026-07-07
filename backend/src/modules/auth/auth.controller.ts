import { Request, Response } from 'express';

export const authUser = (req: Request, res: Response) => {
	res.json({ message: 'You are authenticated' });
};
