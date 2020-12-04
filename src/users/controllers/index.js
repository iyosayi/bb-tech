const makePostUser = require('./post.user')
const makeDeleteUser = require('./delete.user')
const makeGetUsers = require('./get.users')
const makePatchUser = require('./patch.user')
const { addUser, listUsers, removeUser, editUser } = require('../use-cases')

const postUser = makePostUser({ addUser })
const getUsers = makeGetUsers({ listUsers })
const deleteUser = makeDeleteUser({ removeUser })
const patchUser = makePatchUser({ editUser })

module.exports = { postUser, getUsers, deleteUser, patchUser }
