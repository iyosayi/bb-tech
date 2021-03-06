/* eslint-disable max-classes-per-file */
class RequiredParameterError extends Error {
  constructor(param) {
    super(`${param} cannot be null or undefined.`)

    this.name = 'RequiredParameterError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}

class UniqueConstraintError extends Error {
  constructor(value) {
    super(`${value} must be unique.`)

    this.name = 'UniqueConstraintError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError)
    }
  }
}

class InvalidPropertyError extends Error {
  constructor(msg) {
    super(msg)

    this.name = 'InvalidPropertyError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError)
    }
  }
}

module.exports = {
  RequiredParameterError,
  UniqueConstraintError,
  InvalidPropertyError,
}
