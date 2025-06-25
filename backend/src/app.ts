import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes/index.route';

const app = express();

app.use(express.json());

// Routes
app.use('/', router);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
