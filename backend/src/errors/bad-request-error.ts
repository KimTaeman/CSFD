import {ErrorException} from "@/errors/error-exception";

export class BadRequestError extends ErrorException {
    status = 400;

    constructor(public message: string) {
        super(message);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}