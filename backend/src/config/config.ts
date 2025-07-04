import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  secret: string;
  clientId: string;
  authority: string;
  clientSecret: string;
  redirectUri: string;
  clientRedirectURL: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  secret: process.env.SESSION_SECRET || '',
  clientId: process.env.MICROSOFT_CLIENT_ID || '',
  authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
  redirectUri: process.env.BACKEND_REDIRECT_URI || '',
  clientRedirectURL: process.env.CLIENT_REDIRECT_URL || '/',
};

export default config;
