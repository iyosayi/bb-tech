const {
  patchUser,
  postUser,
  getUsers,
  deleteUser,
} = require('./src/users/controllers')
const decodeToken = require('./src/middleware/auth')
const { postLogin, getUser } = require('./src/auth/controllers')

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.userApi = (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.send('hello')
    // return getUsers(req, res)
    case 'POST':
      return postUser(req, res)
    case 'PATCH':
      return decodeToken(patchUser(req, res))
    case 'DELETE':
      return decodeToken(deleteUser(req, res))
    default:
      return res.status(405).send(`${req.method} is not allowed.`)
  }
}

exports.authApi = (req, res) => {
  switch (req.method) {
    case 'GET':
      return getUser(req, res)
    case 'POST':
      return postLogin(req, res)
    default:
      return res.json({
        message: 'Please enter email and password to be authenticated.',
      })
  }
}
