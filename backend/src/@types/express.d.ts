// types/express/index.d.ts
import 'express';
import { UserPayload } from '../middleware/userAuthenticate';

declare module 'express' {
  export interface Request {
    user?: UserPayload;
  }
}
