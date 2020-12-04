const makeGetUser = ({ listUser }) =>
  async function getUser(req, res) {
    const user = await listUser({ id: req.user.id })
    return res.status(200).json({
      status: true,
      message: 'Authorized',
      data: [user],
    })
  }

module.exports = makeGetUser
