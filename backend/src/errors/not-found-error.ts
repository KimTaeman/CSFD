import { ErrorException } from '@/errors/error-exception';

export class NotFoundError extends ErrorException {
  status = 404;
  
  constructor() {
    super("Route not found");
  }
  
  serializeErrors(): { message: string; field?: string | undefined; }[] {
    return [{ message: "Not found" }];
  }
}