import express from 'express';
import authRouter from './modules/auth/auth.route.js';
import morgan from 'morgan';
import { env } from '@config/env.js';

const app = express();

if (env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api', authRouter);

export default app;
