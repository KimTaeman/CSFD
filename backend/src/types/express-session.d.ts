import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: {
      id: number;
      displayName: string;
      email: string;
      nickname: string | null;
      role: string;
    };
  }
}
