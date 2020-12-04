const makeUsersDb = require('./usersDb')
const makeDb = require('../../database')
const { hashPassword, createToken } = require('../../helpers/auth.utils')

const usersDb = makeUsersDb({ makeDb, hashPassword, createToken })

module.exports = usersDb
