/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const makeUsersDb = ({ makeDb, hashPassword, createToken }) => {
  async function insert({ ...details }) {
    const db = await makeDb()
    if (details.password) {
      details.password = await hashPassword(details.password)
    }
    const user = await db.collection('users').insertOne({ ...details })
    const userId = {
      id: user._id,
    }
    const token = await createToken(userId)
    const { _id: id, ...insertedInfo } = user.ops[0]
    return { id, ...insertedInfo, token }
  }

  async function update({ id: _id, ...details }) {
    const db = await makeDb()
    const updated = await db
      .collection('users')
      .updateOne({ _id }, { $set: { ...details } })
    return updated.modifiedCount > 0 ? { id: _id, ...details } : null
  }

  async function remove({ id: _id }) {
    const db = await makeDb()
    const deleted = await db.collection('users').deleteOne({ _id })
    return deleted.deletedCount
  }

  async function findAll() {
    const db = await makeDb()
    const users = await db.collection('users').find()
    return (await users.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }))
  }

  async function findById({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('users').findOne({ _id })
    return result
  }

  async function findByEmail({ email }) {
    const db = await makeDb()
    const found = await db.collection('users').findOne({ email })
    return found
  }

  return Object.freeze({
    insert,
    update,
    remove,
    findAll,
    findById,
    findByEmail,
  })
}

module.exports = makeUsersDb
