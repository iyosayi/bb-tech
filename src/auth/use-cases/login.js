/* eslint-disable no-underscore-dangle */
const makeAuth = require('../factory')
const { InvalidPropertyError } = require('../../helpers/Errors')
const { validatePassword } = require('../../helpers/auth.utils')

const makeLoginUser = ({ usersDb, sendTokenResponse }) =>
  async function loginUser(userInfo) {
    const user = makeAuth(userInfo)

    const exists = await usersDb.findByEmail({
      email: user.getEmail().toLowerCase(),
    })
    if (!exists) {
      throw new InvalidPropertyError('User does not exist.')
    }

    const password = await validatePassword(user.getPassword(), exists.password)
    if (!password) {
      throw new InvalidPropertyError('Password is incorrect.')
    }

    const payload = {
      id: exists._id,
    }

    return sendTokenResponse(payload)
  }

module.exports = makeLoginUser
