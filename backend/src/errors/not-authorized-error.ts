import { ErrorException } from '@/errors/error-exception';

export class UnauthorizedError extends ErrorException {
  status = 401;

  constructor(message: string = 'Not authorized') {
    super(message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
