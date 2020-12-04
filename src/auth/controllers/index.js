const makePostLogin = require('./post-login')
const makeGetUser = require('./get-user')
const { loginUser, listUser } = require('../use-cases')

const postLogin = makePostLogin({ loginUser })
const getUser = makeGetUser({ listUser })

module.exports = { postLogin, getUser }
