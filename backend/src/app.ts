import { env } from '@config/env.js';
import express from 'express';
import morgan from 'morgan';
import authRouter from './modules/auth/auth.route.js';
import { errorHandler } from '@middlewares/error-handler.js';

const app = express();

if (env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api', authRouter);

app.use(errorHandler);

export default app;
