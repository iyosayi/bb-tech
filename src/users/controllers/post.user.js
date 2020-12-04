const makePostUser = ({ addUser }) =>
  async function postUser(req, res) {
    try {
      const { ...userInfo } = req.body
      const user = await addUser({ ...userInfo })

      return res.status(201).json({
        status: true,
        message: 'User created',
        data: [user],
      })
    } catch (error) {
      return res.status(400).json({
        status: false,
        title: error.name,
        message: error.message,
      })
    }
  }

module.exports = makePostUser
