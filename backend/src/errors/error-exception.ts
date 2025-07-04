export abstract class ErrorException extends Error {
  abstract status: number;

  protected constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
