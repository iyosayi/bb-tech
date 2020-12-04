const { RequiredParameterError } = require('./Errors')

function requiredParam(param) {
  throw new RequiredParameterError(param)
}

module.exports = requiredParam
