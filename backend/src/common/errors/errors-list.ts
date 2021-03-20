import { StatusCodes, ReasonPhrases } from 'http-status-codes';

class BadRequestError extends Error {
  status: StatusCodes;
  statusText: ReasonPhrases;
  reason: string;
  constructor(reason: string) {
    super();
    this.status = StatusCodes.BAD_REQUEST;
    this.statusText = ReasonPhrases.BAD_REQUEST;
    this.reason = reason;
  }
}

class NotFoundError extends Error {
  status: StatusCodes;
  statusText: ReasonPhrases;
  reason: string;
  constructor(entity: string) {
    super();
    this.status = StatusCodes.NOT_FOUND;
    this.statusText = ReasonPhrases.NOT_FOUND;
    this.reason = `${entity} not found`;
  }
}

class InternalServerError extends Error {
  status: StatusCodes;
  statusText: ReasonPhrases;
  reason: string;
  constructor(reason = 'something went wrong') {
    super();
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.statusText = ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.reason = reason; // 'something went wrong';
  }
}

class MongoDuplicateError extends Error {
  status: StatusCodes;
  statusText: ReasonPhrases;
  reason: string;
  constructor(reason: string) {
    super();
    this.status = StatusCodes.CONFLICT;
    this.statusText = ReasonPhrases.CONFLICT;
    this.reason = reason;
  }
}

export {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  MongoDuplicateError,
};
