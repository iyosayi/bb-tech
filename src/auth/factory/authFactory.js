const { RequiredParameterError } = require('../../helpers/Errors')

const buildAuthFactory = () =>
  function makeAuth({ email, password } = {}) {
    if (!email) {
      throw new RequiredParameterError('Email')
    }
    if (!password) {
      throw new RequiredParameterError('Password')
    }

    return Object.freeze({
      getEmail: () => email.toLowerCase(),
      getPassword: () => password,
    })
  }

module.exports = buildAuthFactory
