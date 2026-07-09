// backend/src/server.ts
import { env } from '@config/env.js';
import { prisma } from '@config/prisma.js';
import app from './app.js';

async function main() {
	await prisma.$connect();
	console.log('Database connected');

	const server = app.listen(env.PORT, () => {
		console.log(`Server started on ${env.PORT}`);
	});

	const shutdown = async (signal: string) => {
		console.log(`${signal} received, shutting down gracefully`);

		server.close(async () => {
			await prisma.$disconnect();
			console.log('Database disconnected');
			process.exit(0);
		});

		setTimeout(() => {
			console.error('Forced shutdown after timeout');
			process.exit(1);
		}, 10_000).unref();
	};

	process.on('SIGTERM', () => shutdown('SIGTERM'));
	process.on('SIGINT', () => shutdown('SIGINT'));
}

main().catch((err) => {
	console.error('Failed to start server:', err);
	process.exit(1);
});
