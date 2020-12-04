const { InvalidPropertyError } = require('../../helpers/Errors')

/**
 * Get all users
 */

const makeListUsers = ({ usersDb }) =>
  async function listUsers({ id } = {}) {
    if (id) {
      const user = await usersDb.findById({ id })
      if (!user) {
        throw new InvalidPropertyError('User does not exist.')
      }
      return user
    }
    return usersDb.findAll()
  }

module.exports = makeListUsers
