const makePostLogin = ({ loginUser }) =>
  async function postLogin(req, res) {
    try {
      const { ...userInfo } = req.body
      const token = await loginUser({ ...userInfo })
      return res.status(200).json({
        status: true,
        message: 'Authorized',
        token,
      })
    } catch (error) {
      return res.status(401).json({
        status: false,
        title: error.name,
        message: error.message,
      })
    }
  }

module.exports = makePostLogin
