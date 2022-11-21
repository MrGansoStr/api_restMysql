const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');
const messages = require('./messages/messages.js');

const getReceipts = async (req, res) => {
  let credentials = { ...req.body }
  try {
    const connection = await connectDB();
    const [result] = await connection.query(queries.GETRECEIPTS, [credentials.userid]);
    if (result.length === 0) {
      return res.status(400).send(messages.MSGEMPTYROWS);
    }
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).send(error).json();
  }
};

module.exports = getReceipts;