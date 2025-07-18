import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from './config/config';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: config.nodeEnv === 'production',
    },
  }),
);

// Routes
app.use('/', router);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
