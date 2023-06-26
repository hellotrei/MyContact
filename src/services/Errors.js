class ResponseError extends Error {
  constructor(response = {}) {
    super(response);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }

    this.name = 'ResponseError';
    this.message = response;
  }
}

module.exports = {ResponseError};
