/* eslint-disable no-param-reassign */
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const { InvalidPropertyError, UnauthorizedError } = require('../helpers/Errors')

dotenv.config()

const decodeToken = (controller) =>
  async function decodeUserToken(req, res) {
    const token = req.headers['x-auth-token']
    if (!token) {
      throw new UnauthorizedError('No token, authorization denied.')
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      throw new InvalidPropertyError('No User with this token exists.')
    }
    req.user = decoded
    return controller(req, res)
  }

module.exports = decodeToken
