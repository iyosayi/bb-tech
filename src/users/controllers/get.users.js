const makeGetUser = ({ listUsers }) =>
  async function getUser(req, res) {
    try {
      const { id } = req.query
      const user = await listUsers({ id })
      return res.status(200).json({
        status: true,
        message: 'Users',
        data: user,
      })
    } catch (error) {
      return res.status(400).json({
        status: false,
        title: error.name,
        message: error.message,
      })
    }
  }
module.exports = makeGetUser
