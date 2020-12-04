const requiredParam = require('../../helpers/requiredParam')

const makeRemoveUser = ({ usersDb }) =>
  async function removeUser({ id = requiredParam('Id') } = {}) {
    const userToDelete = await usersDb.findById({ id })
    if (!userToDelete) {
      return deleteNothing()
    }
    return hardDelete(userToDelete)

    async function hardDelete(user) {
      await usersDb.remove(user)
      return {
        deletedCount: 1,
        message: 'User deleted.',
      }
    }

    function deleteNothing() {
      return {
        deletedCount: 0,
        message: 'User not found, nothing to delete.',
      }
    }
  }

module.exports = makeRemoveUser
