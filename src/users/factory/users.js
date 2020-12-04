const requiredParam = require('../../helpers/requiredParam')

const makeUserFactory = () =>
  function makeUser({
    name = requiredParam('Name'),
    email = requiredParam('Email'),
    password = requiredParam('Password'),
  } = {}) {
    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
    })
  }

module.exports = makeUserFactory
