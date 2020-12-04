/* eslint-disable wrap-iife */
require('dotenv').config()
const { MongoClient, ObjectID } = require('mongodb')

const url = process.env.DB_URL
const dbName = process.env.DB_NAME

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  const db = client.db(dbName)
  // eslint-disable-next-line no-use-before-define
  db.makeId = makeIdFromString
  return db
}

function makeIdFromString(id) {
  return new ObjectID(id)
}

;(async function setupDB() {
  console.log('Setting up database...')
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await makeDb()
  const result = await db.collection('users').createIndex({ _id: 1 })
  console.log(result)
  console.log('Database setup complete...')
})()

module.exports = makeDb
