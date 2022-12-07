const connectDB = require('../../services/connection.db.js');
const queries = require('./queries/queries.js');

const getReceiptsPending = async (req, res) => {
  let credentials = {...req.body}
  try {
    const connection = await connectDB();
    const [ result ] = await connection.query(queries.GETRECEIPTSPENDING, [credentials.userid]);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  return;
}

module.exports = getReceiptsPending;