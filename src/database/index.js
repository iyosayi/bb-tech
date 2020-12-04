/* eslint-disable wrap-iife */
require('dotenv').config()
const { MongoClient } = require('mongodb')

const url = process.env.DB_URL

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db('bb-tech')
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
