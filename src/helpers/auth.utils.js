const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const createToken = (userId) =>
  jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '1d' })

const sendTokenResponse = (userId) => {
  const token = createToken(userId)
  return token
}

const decodeToken = (details) => jwt.decode(details)

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET)

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12)
  const hashed = await bcrypt.hash(password, salt)
  return hashed
}

const validatePassword = async (password, password2) => {
  const validPassord = await bcrypt.compare(password, password2)
  return validPassord
}

module.exports = {
  createToken,
  sendTokenResponse,
  decodeToken,
  verifyToken,
  hashPassword,
  validatePassword,
}
