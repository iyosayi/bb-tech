const makeAddUser = require('./add.user')
const makeEditUser = require('./edit.user')
const makeListUsers = require('./list.users')
const makeRemoveUsers = require('./remove.user')
const usersDb = require('../models')

const addUser = makeAddUser({ usersDb })
const editUser = makeEditUser({ usersDb })
const listUsers = makeListUsers({ usersDb })
const removeUser = makeRemoveUsers({ usersDb })

module.exports = { addUser, editUser, listUsers, removeUser }
