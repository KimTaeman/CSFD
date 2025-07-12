import { ErrorException } from '@/errors/error-exception';

export class NotFoundError extends ErrorException {
  status = 404;

  constructor(message: string = 'Not Found') {
    super(message);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.message }];
  }
}
