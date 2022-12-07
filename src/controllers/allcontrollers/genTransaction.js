const connectDB = require('../../services/connection.db');
const queries = require('./queries/queries');


const genTransaction = async (req, res) => {
  let credentials = {...req.body};
  console.log(credentials);
  try {
    const connection = await connectDB();
    const [ result ] = await connection.query(queries.GENERATETRANSACTION, [credentials.idreceipt, credentials.iduser, credentials.idtransaction, credentials.time, 1]);
    return res.status(200).send("Payed Succesfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  return;
}

module.exports = genTransaction;