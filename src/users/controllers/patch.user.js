const makePatchUser = ({ editUser }) =>
  async function patchUser(req, res) {
    try {
      const { ...userInfo } = req.body
      const toEdit = { ...userInfo, id: req.query.id }
      const user = await editUser(toEdit)
      return res.status(200).json({
        status: true,
        message: 'User updated successfully',
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
module.exports = makePatchUser
