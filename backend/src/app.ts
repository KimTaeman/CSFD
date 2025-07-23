import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import config from './config/config';

const app = express();
app.set('trust proxy', 1);

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://csfd.sit.kmutt.ac.th',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || typeof origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, origin);
      }

      return callback(new Error('Not allowed by CORS: ' + origin));
    },
    credentials: true,
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
      secure: config.nodeEnv === 'production',
      sameSite: 'lax',
    },
  }),
);

// Routes
app.use('/', router);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
