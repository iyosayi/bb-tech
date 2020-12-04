const makeLoginUser = require('./login')
const makeGetUser = require('./get-user')
const { sendTokenResponse } = require('../../helpers/auth.utils')
const usersDb = require('../../users/models')

const loginUser = makeLoginUser({ usersDb, sendTokenResponse })
const listUser = makeGetUser({ usersDb })

module.exports = { loginUser, listUser }
