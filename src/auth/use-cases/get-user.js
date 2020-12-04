const requiredParam = require('../../helpers/requiredParam')
const { InvalidPropertyError } = require('../../helpers/Errors')

const makeListUser = ({ usersDb }) =>
  async function listUser({ id = requiredParam('Id') } = {}) {
    const user = await usersDb.findById({ id })
    if (!user) {
      throw new InvalidPropertyError('User does not exist.')
    }
    return user
  }

module.exports = makeListUser
