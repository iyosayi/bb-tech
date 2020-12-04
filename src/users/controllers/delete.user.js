const makeDeleteUser = ({ removeUser }) =>
  async function deleteUser(req, res) {
    try {
      const { id } = req.query
      const user = await removeUser({ id })
      return res.status(200).json({
        status: true,
        message: 'User deleted successfully',
        data: user,
      })
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
        title: error.name,
      })
    }
  }
module.exports = makeDeleteUser
