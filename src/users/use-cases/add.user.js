const makeUser = require('../factory')
const { UniqueConstraintError } = require('../../helpers/Errors')

const makeAddUser = ({ usersDb }) =>
  async function addUser(userInfo) {
    const user = makeUser(userInfo)
    const exists = await usersDb.findByEmail({ email: user.getEmail() })
    if (exists) {
      throw new UniqueConstraintError('Email address')
    }

    return usersDb.insert({
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
    })
  }

module.exports = makeAddUser
