import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes/index.route';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', router);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
