const mysql = require('mysql2/promise');
const config = require('../config/config.js');

async function connectDB() {
  const connection = await mysql.createConnection({
    host: config.host,
    user: config.userdtb,
    password: config.passdb,
    database: config.db,
    ssl: {
      rejectUnauthorized: false
    }
  })
  return connection;
}

module.exports = connectDB;