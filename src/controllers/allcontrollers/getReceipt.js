const connectDB = require('../../services/connection.db.js');

const queries = require('./queries/queries.js');
const validInput = require('../../utilities/validgetreceipt.js');
const messages = require('./messages/messages.js');

const getReceipt = async (req, res) => {
  let credentials = { ...req.body };
  if (!validInput(credentials)) {
    return res.status(403).send({ message: "Entradas invalidas" });
  }
  try {
    const connection = await connectDB();
    const [result] = await connection.query(queries.GETRECEIPT, [credentials.userid, credentials.receiptid]);
    if (result.length === 0) {
      return res.status(403).send(messages.MSGEMPTYROWS);
      //return res.status(403).send({ message: "No se encontro recibos" });
    }
    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    return res.status(400);
  }
  return;
};

module.exports = getReceipt;