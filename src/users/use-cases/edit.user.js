const makeUser = require('../factory')
const requiredParam = require('../../helpers/requiredParam')
const { InvalidPropertyError } = require('../../helpers/Errors')

const makeEditUser = ({ usersDb }) =>
  async function editUser({ id = requiredParam('Id'), ...changes } = {}) {
    const exists = await usersDb.findById({ id })
    if (!exists) {
      throw new InvalidPropertyError('User does not exist.')
    }
    const user = makeUser({ ...changes })
    return usersDb.update({
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      id,
    })
  }

module.exports = makeEditUser
